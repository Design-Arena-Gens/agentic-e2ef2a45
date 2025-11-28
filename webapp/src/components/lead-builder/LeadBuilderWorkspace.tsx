"use client";

import { useMemo, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Check,
  Eye,
  EyeOff,
  GripVertical,
  Palette,
  Settings2,
  Trash2,
} from "lucide-react";
import clsx from "clsx";

type FieldDefinition = {
  id: string;
  label: string;
  placeholder?: string;
  description?: string;
};

type BuilderField = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  hidden?: boolean;
};

const FIELD_LIBRARY: FieldDefinition[] = [
  { id: "full-name", label: "Full Name", placeholder: "Your full name" },
  { id: "first-name", label: "First Name", placeholder: "First name" },
  { id: "last-name", label: "Last Name", placeholder: "Last name" },
  { id: "phone", label: "Phone", placeholder: "Mobile number" },
  { id: "email", label: "Email", placeholder: "name@email.com" },
  { id: "full-address", label: "Full Address", placeholder: "Street address" },
  { id: "state", label: "State/Province", placeholder: "State or province" },
  { id: "city", label: "City/Town", placeholder: "City" },
  { id: "postal-code", label: "Postal Code", placeholder: "Postal code" },
  { id: "product", label: "Product", placeholder: "Product name" },
  { id: "variant", label: "Variant", placeholder: "Variant (if any)" },
  { id: "quantity", label: "Quantity", placeholder: "Quantity" },
  {
    id: "notes",
    label: "Notes/Instructions",
    placeholder: "Any special instructions?",
  },
  {
    id: "payment-method",
    label: "Payment Method",
    placeholder: "Select a payment method",
  },
];

type ActiveDrag = {
  label: string;
  source: "library" | "form";
};

type DesignSettings = {
  accentColor: string;
  borderRadius: number;
  buttonLabel: string;
  backgroundStyle: "light" | "card" | "minimal";
};

type TemplateSettings = {
  template: string;
  audience: string;
  tags: string;
};

type MarketingSettings = {
  doubleOptIn: boolean;
  syncDestination: string;
  autoTag: string;
};

type ThankYouSettings = {
  headline: string;
  body: string;
  redirect: string;
};

const INITIAL_FIELDS: BuilderField[] = [
  {
    id: "field-1",
    type: "full-name",
    label: "Full Name",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "field-2",
    type: "email",
    label: "Email",
    placeholder: "name@email.com",
    required: true,
  },
  {
    id: "field-3",
    type: "product",
    label: "Product of interest",
    placeholder: "What would you like to purchase?",
    required: false,
  },
];

function createField(definition: FieldDefinition): BuilderField {
  return {
    id: crypto.randomUUID(),
    type: definition.id,
    label: definition.label,
    placeholder:
      definition.placeholder ?? `Enter ${definition.label.toLowerCase()}`,
    required: false,
  };
}

type LibraryItemProps = {
  definition: FieldDefinition;
};

const LibraryItem = ({ definition }: LibraryItemProps) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id: definition.id,
      data: { type: "library", definition },
    });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={clsx(
        "flex cursor-grab items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-700 active:cursor-grabbing",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-lg leading-none text-slate-400">⋮⋮</span>
        <div>
          <p className="font-medium">{definition.label}</p>
          {definition.description ? (
            <p className="text-xs text-slate-500">{definition.description}</p>
          ) : null}
        </div>
      </div>
      <span className="text-base leading-none text-slate-300">⚙️</span>
    </div>
  );
};

type SortableFieldProps = {
  field: BuilderField;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  toggleRequired: () => void;
  toggleHidden: () => void;
};

const SortableField = ({
  field,
  isSelected,
  onSelect,
  onRemove,
  toggleRequired,
  toggleHidden,
}: SortableFieldProps) => {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: field.id,
    data: { type: "form", field },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const previewInput = useMemo(() => {
    switch (field.type) {
      case "notes":
        return (
          <textarea
            placeholder={field.placeholder}
            className="min-h-[90px] w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          />
        );
      case "payment-method":
        return (
          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100">
            <option value="">Select payment method</option>
            <option value="card">Credit Card</option>
            <option value="shop-pay">Shop Pay</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        );
      case "quantity":
        return (
          <input
            type="number"
            min={1}
            placeholder={field.placeholder}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          />
        );
      default:
        return (
          <input
            placeholder={field.placeholder}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          />
        );
    }
  }, [field.placeholder, field.type]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "rounded-xl border bg-white p-4 shadow-sm transition",
        isSelected
          ? "border-emerald-300 ring-2 ring-emerald-100"
          : "border-slate-200 hover:border-emerald-200",
        isDragging && "opacity-50"
      )}
      onClick={onSelect}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            ref={setActivatorNodeRef}
            {...listeners}
            {...attributes}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-emerald-200 hover:text-emerald-700"
            type="button"
            aria-label="Reorder field"
          >
            <GripVertical className="h-4 w-4" />
          </button>
          <div>
            <p className="font-medium text-slate-800">{field.label}</p>
            <p className="text-xs text-slate-500">
              {field.required ? "Required" : "Optional"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              toggleHidden();
            }}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 hover:border-emerald-200 hover:text-emerald-700",
              field.hidden && "border-emerald-200 bg-emerald-50 text-emerald-700"
            )}
            aria-label="Toggle visibility"
          >
            {field.hidden ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onRemove();
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 hover:border-rose-200 hover:text-rose-600"
            aria-label="Remove field"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      {field.hidden ? (
        <div className="mt-3 rounded-lg border border-dashed border-slate-200 bg-slate-50/70 px-3 py-4 text-center text-xs text-slate-400">
          Hidden field – visible after automation triggers.
        </div>
      ) : (
        <div className="mt-3 space-y-1">
          {previewInput}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              toggleRequired();
            }}
            className={clsx(
              "mt-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition",
              field.required
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"
            )}
          >
            <Check className="h-3.5 w-3.5" />
            Required
          </button>
        </div>
      )}
    </div>
  );
};

const Tabs = [
  { id: "design", label: "Design" },
  { id: "template", label: "Template" },
  { id: "marketing", label: "Marketing" },
  { id: "thankyou", label: "Thank You Page" },
];

export function LeadBuilderWorkspace() {
  const [formFields, setFormFields] = useState<BuilderField[]>(INITIAL_FIELDS);
  const [activeTab, setActiveTab] = useState<string>("design");
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(
    INITIAL_FIELDS[0]?.id ?? null
  );
  const [activeDrag, setActiveDrag] = useState<ActiveDrag | null>(null);
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");

  const [designSettings, setDesignSettings] = useState<DesignSettings>({
    accentColor: "#047857",
    borderRadius: 16,
    buttonLabel: "Submit lead",
    backgroundStyle: "light",
  });

  const [templateSettings, setTemplateSettings] = useState<TemplateSettings>({
    template: "Evergreen Capture",
    audience: "High-intent retail shoppers",
    tags: "evergreen,shopify-online",
  });

  const [marketingSettings, setMarketingSettings] = useState<MarketingSettings>(
    {
      doubleOptIn: true,
      syncDestination: "Klaviyo • Evergreen list",
      autoTag: "Lead:High Intent",
    }
  );

  const [thankYouSettings, setThankYouSettings] = useState<ThankYouSettings>({
    headline: "Thanks for reaching out!",
    body: "Our team will confirm availability and follow up with recommendations tailored to your selection.",
    redirect: "https://auroramart.com/collections/featured",
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    })
  );

  const { setNodeRef: setPreviewRef, isOver } = useDroppable({
    id: "form-preview",
  });

  const selectedField = selectedFieldId
    ? formFields.find((field) => field.id === selectedFieldId) ?? null
    : null;

  const accentStyles = useMemo(() => {
    const radiusClass =
      designSettings.borderRadius >= 20
        ? "rounded-2xl"
        : designSettings.borderRadius >= 12
          ? "rounded-xl"
          : "rounded-lg";
    return {
      button: clsx(
        "px-4 py-2 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        radiusClass
      ),
      card: clsx(
        "border bg-white px-5 py-6 shadow-sm",
        radiusClass,
        designSettings.backgroundStyle === "card" && "border-emerald-100",
        designSettings.backgroundStyle === "minimal" && "border-transparent"
      ),
      wrapper: clsx(
        "w-full border bg-white p-6 shadow-sm",
        radiusClass,
        designSettings.backgroundStyle === "card" && "border-emerald-100",
        designSettings.backgroundStyle === "minimal" && "border-transparent"
      ),
    };
  }, [designSettings.backgroundStyle, designSettings.borderRadius]);

  const handleDragStart = (event: DragStartEvent) => {
    const data = event.active.data.current as
      | { type: "library"; definition: FieldDefinition }
      | { type: "form"; field: BuilderField }
      | undefined;
    if (!data) return;
    if (data.type === "library") {
      setActiveDrag({ label: data.definition.label, source: "library" });
    } else {
      setActiveDrag({ label: data.field.label, source: "form" });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveDrag(null);
    if (!over) return;

    const data = active.data.current as
      | { type: "library"; definition: FieldDefinition }
      | { type: "form"; field: BuilderField }
      | undefined;
    if (!data) return;

    if (data.type === "library") {
      const definition = data.definition;
      const newField = createField(definition);
      const overId = over.id as string;
      setFormFields((prev) => {
        const next = [...prev];
        const overData = over.data.current as
          | { sortable?: { index: number } }
          | undefined;
        const targetIndex =
          overId === "form-preview"
            ? next.length
            : typeof overData?.sortable?.index === "number"
              ? overData.sortable.index
              : Math.max(next.findIndex((field) => field.id === overId), 0);
        next.splice(targetIndex, 0, newField);
        return next;
      });
      setSelectedFieldId(newField.id);
    } else if (data.type === "form") {
      setFormFields((prev) => {
        const oldIndex = prev.findIndex((field) => field.id === active.id);
        if (oldIndex === -1) {
          return prev;
        }
        const overId = over.id as string;
        const overData = over.data.current as
          | { sortable?: { index: number } }
          | undefined;
        const newIndex =
          overId === "form-preview"
            ? prev.length - 1
            : typeof overData?.sortable?.index === "number"
              ? overData.sortable.index
              : prev.findIndex((field) => field.id === overId);
        if (newIndex === -1 || newIndex === oldIndex) {
          return prev;
        }
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const handleRemoveField = (fieldId: string) => {
    let nextSelected: string | null = selectedFieldId;
    setFormFields((prev) => {
      const next = prev.filter((field) => field.id !== fieldId);
      if (selectedFieldId === fieldId) {
        nextSelected = next[0]?.id ?? null;
      }
      return next;
    });
    setSelectedFieldId(nextSelected);
  };

  const updateSelectedField = (
    updates: Partial<Pick<BuilderField, "label" | "placeholder" | "required">>
  ) => {
    if (!selectedFieldId) return;
    setFormFields((prev) =>
      prev.map((field) =>
        field.id === selectedFieldId ? { ...field, ...updates } : field
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-heading">Lead Suite</p>
            <h1 className="text-2xl font-semibold text-slate-800">
              Drag-and-drop form builder
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Arrange fields, personalize styling, and sync marketing automation
              without leaving the Shopify embedded experience.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
              Preview on store
            </button>
            <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
              Publish form
            </button>
          </div>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveDrag(null)}
      >
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
          <section className="space-y-4">
            <div className="glass-card border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="section-heading">Fields</p>
                  <h2 className="text-sm font-semibold text-slate-800">
                    Drag elements into your form
                  </h2>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-emerald-200 hover:text-emerald-700">
                  <Settings2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 space-y-2">
                {FIELD_LIBRARY.map((definition) => (
                  <LibraryItem key={definition.id} definition={definition} />
                ))}
              </div>
            </div>

            <div className="glass-card border border-emerald-100 bg-emerald-50/40 p-4 text-sm text-emerald-700">
              Drop fields above or click to configure their labels, placeholder
              text, and required rules. Hidden fields let you capture additional
              data for internal automation without exposing them to customers.
            </div>
          </section>

          <section className="glass-card border border-slate-200 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="section-heading">Form Preview</p>
                <h2 className="text-sm font-semibold text-slate-800">
                  Live storefront preview
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setViewport("desktop")}
                  className={clsx(
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    viewport === "desktop"
                      ? "bg-emerald-600 text-white"
                      : "text-slate-500 hover:text-emerald-700"
                  )}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setViewport("mobile")}
                  className={clsx(
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    viewport === "mobile"
                      ? "bg-emerald-600 text-white"
                      : "text-slate-500 hover:text-emerald-700"
                  )}
                >
                  Mobile
                </button>
              </div>
            </div>

            <div
              className={clsx(
                "mt-5 flex w-full justify-center",
                viewport === "mobile" && "md:px-16"
              )}
            >
              <div
                ref={setPreviewRef}
                className={clsx(
                  accentStyles.wrapper,
                  isOver && "ring-2 ring-emerald-200"
                )}
                style={{
                  borderColor:
                    designSettings.backgroundStyle === "minimal"
                      ? "transparent"
                      : "rgba(148, 163, 184, 0.3)",
                }}
              >
                <div className="mb-6 border-b border-slate-200 pb-4 text-sm text-slate-600">
                  Use drag-and-drop to reorder fields. Settings sync instantly
                  with the live Shopify embedded app.
                </div>

                <SortableContext
                  items={formFields.map((field) => field.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-4">
                    {formFields.length === 0 ? (
                      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-10 text-center text-sm text-slate-500">
                        Drag fields here to start building your lead form.
                      </div>
                    ) : (
                      formFields.map((field) => (
                        <SortableField
                          key={field.id}
                          field={field}
                          isSelected={selectedFieldId === field.id}
                          onSelect={() => setSelectedFieldId(field.id)}
                          onRemove={() => handleRemoveField(field.id)}
                          toggleRequired={() =>
                            setFormFields((prev) =>
                              prev.map((candidate) =>
                                candidate.id === field.id
                                  ? {
                                      ...candidate,
                                      required: !candidate.required,
                                    }
                                  : candidate
                              )
                            )
                          }
                          toggleHidden={() =>
                            setFormFields((prev) =>
                              prev.map((candidate) =>
                                candidate.id === field.id
                                  ? { ...candidate, hidden: !candidate.hidden }
                                  : candidate
                              )
                            )
                          }
                        />
                      ))
                    )}
                  </div>
                </SortableContext>

                <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs text-slate-500">
                  <span>
                    Submission routes to:{" "}
                    <strong className="font-semibold text-emerald-600">
                      Growth CRM • Aurora Pipeline
                    </strong>
                  </span>
                  <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 hover:border-emerald-200 hover:text-emerald-700">
                    Edit
                  </button>
                </div>

                <div className="mt-6">
                  <button
                    className={accentStyles.button}
                    style={{ backgroundColor: designSettings.accentColor }}
                  >
                    {designSettings.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
          <div className="glass-card border border-slate-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="section-heading">Settings</p>
                <h2 className="text-sm font-semibold text-slate-800">
                  Configure experience
                </h2>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Palette className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {Tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "rounded-full border px-3 py-1 text-xs font-semibold transition",
                    activeTab === tab.id
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"
                  )}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {activeTab === "design" && (
                <div className="space-y-4">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Accent Color
                    <input
                      type="color"
                      value={designSettings.accentColor}
                      onChange={(event) =>
                        setDesignSettings((prev) => ({
                          ...prev,
                          accentColor: event.target.value,
                        }))
                      }
                      className="mt-2 h-10 w-full cursor-pointer rounded-lg border border-slate-200"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Button Label
                    <input
                      type="text"
                      value={designSettings.buttonLabel}
                      onChange={(event) =>
                        setDesignSettings((prev) => ({
                          ...prev,
                          buttonLabel: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Border Radius
                    <input
                      type="range"
                      value={designSettings.borderRadius}
                      min={8}
                      max={24}
                      onChange={(event) =>
                        setDesignSettings((prev) => ({
                          ...prev,
                          borderRadius: Number(event.target.value),
                        }))
                      }
                      className="mt-2 w-full"
                    />
                  </label>
                  <div className="grid gap-2 text-xs text-slate-600">
                    <span className="font-semibold uppercase tracking-wide text-slate-500">
                      Background Style
                    </span>
                    <div className="flex gap-2">
                      {["light", "card", "minimal"].map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() =>
                            setDesignSettings((prev) => ({
                              ...prev,
                              backgroundStyle: style as DesignSettings["backgroundStyle"],
                            }))
                          }
                          className={clsx(
                            "flex-1 rounded-lg border px-3 py-2 capitalize transition",
                            designSettings.backgroundStyle === style
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"
                          )}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "template" && (
                <div className="space-y-4 text-sm text-slate-600">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Template Name
                    <input
                      type="text"
                      value={templateSettings.template}
                      onChange={(event) =>
                        setTemplateSettings((prev) => ({
                          ...prev,
                          template: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Audience
                    <input
                      type="text"
                      value={templateSettings.audience}
                      onChange={(event) =>
                        setTemplateSettings((prev) => ({
                          ...prev,
                          audience: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Tags
                    <input
                      type="text"
                      value={templateSettings.tags}
                      onChange={(event) =>
                        setTemplateSettings((prev) => ({
                          ...prev,
                          tags: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                </div>
              )}

              {activeTab === "marketing" && (
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs">
                    <span className="font-semibold text-slate-700">
                      Double opt-in
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setMarketingSettings((prev) => ({
                          ...prev,
                          doubleOptIn: !prev.doubleOptIn,
                        }))
                      }
                      className={clsx(
                        "rounded-full border px-3 py-1 font-semibold transition",
                        marketingSettings.doubleOptIn
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"
                      )}
                    >
                      {marketingSettings.doubleOptIn ? "Enabled" : "Disabled"}
                    </button>
                  </div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Sync Destination
                    <input
                      type="text"
                      value={marketingSettings.syncDestination}
                      onChange={(event) =>
                        setMarketingSettings((prev) => ({
                          ...prev,
                          syncDestination: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Auto Tag
                    <input
                      type="text"
                      value={marketingSettings.autoTag}
                      onChange={(event) =>
                        setMarketingSettings((prev) => ({
                          ...prev,
                          autoTag: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                </div>
              )}

              {activeTab === "thankyou" && (
                <div className="space-y-4 text-sm text-slate-600">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Headline
                    <input
                      type="text"
                      value={thankYouSettings.headline}
                      onChange={(event) =>
                        setThankYouSettings((prev) => ({
                          ...prev,
                          headline: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Message
                    <textarea
                      value={thankYouSettings.body}
                      onChange={(event) =>
                        setThankYouSettings((prev) => ({
                          ...prev,
                          body: event.target.value,
                        }))
                      }
                      className="mt-2 min-h-[90px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Redirect URL
                    <input
                      type="url"
                      value={thankYouSettings.redirect}
                      onChange={(event) =>
                        setThankYouSettings((prev) => ({
                          ...prev,
                          redirect: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="glass-card border border-emerald-100 bg-emerald-50/50 p-4 text-xs text-emerald-700">
            {selectedField ? (
              <div className="space-y-3">
                <p className="font-semibold text-emerald-800">
                  Field settings: {selectedField.label}
                </p>
                <label className="block font-semibold uppercase tracking-wide text-emerald-600">
                  Display label
                  <input
                    type="text"
                    value={selectedField.label}
                    onChange={(event) =>
                      updateSelectedField({ label: event.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-emerald-800 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="block font-semibold uppercase tracking-wide text-emerald-600">
                  Placeholder
                  <input
                    type="text"
                    value={selectedField.placeholder ?? ""}
                    onChange={(event) =>
                      updateSelectedField({ placeholder: event.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-emerald-800 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              </div>
            ) : (
              <p>Select a field to modify its label and placeholder.</p>
            )}
          </div>
          </section>
        </div>

        <DragOverlay>
          {activeDrag ? (
            <div className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 shadow-lg">
              {activeDrag.label}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
