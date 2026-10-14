import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground " +
  "placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none " +
  "disabled:opacity-50";

type FieldWrapperProps = {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
};

function FieldWrapper({ label, id, error, children }: FieldWrapperProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
};

export function Input({ label, id, error, className, ...props }: InputProps) {
  return (
    <FieldWrapper label={label} id={id} error={error}>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, "h-11", error && "border-red-400", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id: string;
  error?: string;
};

export function Textarea({ label, id, error, className, ...props }: TextareaProps) {
  return (
    <FieldWrapper label={label} id={id} error={error}>
      <textarea
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, "min-h-32 resize-y py-3", error && "border-red-400", className)}
        {...props}
      />
    </FieldWrapper>
  );
}
