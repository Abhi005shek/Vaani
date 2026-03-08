"use client";

import { useStore } from "@tanstack/react-form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useTypedAppFormContext } from "@/hooks/use-hook-form";

import { sliders } from "../data/sliders";
import { ttsFormOptions } from "./text-to-speech-form";

export function SettingsPanelSettings() {
  const form = useTypedAppFormContext(ttsFormOptions);
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

  return (
    <>
      {/* Voice style dropdown section */}
      <div className="border-b border-dashed p-4">
        <p className="text-sm text-muted-foreground">
          Voice selector coming soon
        </p>
      </div>

      <div className="p-4 flex-1">
        <FieldGroup className="gap-8">
          {sliders.map((s) => (
            <form.Field key={s.id} name={s.id}>
              {(field) => (
                <Field>
                  <FieldLabel>{s.label}</FieldLabel>
                  <div className="flex items-center justify-between ">
                    <span className="text-xs text-muted-foreground">
                      {s.leftLabel}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {s.rightLabel}
                    </span>
                  </div>

                  <Slider
                    value={[field.state.value]}
                    onValueChange={(value) => field.handleChange(value[0])}
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    disabled={isSubmitting}
                    className="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:bg-foreground **:data-[slot=slider-track]:h-1"
                  />
                </Field>
              )}
            </form.Field>
          ))}
        </FieldGroup>
      </div>
    </>
  );
}
