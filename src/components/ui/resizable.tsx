import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

function normalizeSize(size: number | string | undefined): string | undefined {
  if (size === undefined) return undefined;
  if (typeof size === "number") {
    // Numbers <= 100 are percentages (e.g. 25 -> "25%")
    // Numbers > 100 are pixels (e.g. 250 -> "250px")
    return size <= 100 ? `${size}%` : `${size}px`;
  }
  return size;
}

const ResizablePanelGroup = ({
  className,
  direction,
  orientation = direction || "horizontal",
  ...props
}: React.ComponentProps<typeof Group> & {
  direction?: "horizontal" | "vertical";
}) => (
  <Group
    orientation={orientation}
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ({
  defaultSize,
  minSize,
  maxSize,
  collapsedSize,
  ...props
}: React.ComponentProps<typeof Panel>) => (
  <Panel
    defaultSize={normalizeSize(defaultSize)}
    minSize={normalizeSize(minSize)}
    maxSize={normalizeSize(maxSize)}
    collapsedSize={normalizeSize(collapsedSize)}
    {...props}
  />
);

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-1 items-center justify-center bg-border/60 hover:bg-primary/50 transition-colors after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-1 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-2 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-5 w-3 items-center justify-center rounded-xs border border-border/80 bg-secondary text-muted-foreground shadow-xs hover:border-primary/50 hover:text-foreground">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
