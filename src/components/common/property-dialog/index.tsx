import * as DialogPrimitive from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";
import { ReactNode } from "react";

type PropertyDialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  showClose?: boolean;
  className?: string;
};

export function PropertyDialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  showClose = true,
  className = "",
}: PropertyDialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-fadeIn" />
        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg focus:outline-none ${className}`}
        >
          <div className="flex items-center justify-between mb-4">
            {title && (
              <DialogPrimitive.Title className="text-lg font-bold">
                {title}
              </DialogPrimitive.Title>
            )}
            {showClose && (
              <DialogPrimitive.Close asChild>
                <button
                  className="rounded p-1 transition hover:bg-gray-100"
                  aria-label="Fechar"
                  type="button"
                >
                  <IconX />
                </button>
              </DialogPrimitive.Close>
            )}
          </div>
          {description && (
            <DialogPrimitive.Description className="mb-4 text-sm text-gray-600">
              {description}
            </DialogPrimitive.Description>
          )}
          <div>{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
