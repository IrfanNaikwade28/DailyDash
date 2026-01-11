import * as React from "react"

import { cn } from "@/lib/utils"
import { getGlassStyles, type GlassCustomization } from "@/lib/glass-utils"

type CardVariant = "default" | "glass" | "frosted" | "fluted" | "crystal"

interface CardProps extends React.ComponentProps<"div"> {
  variant?: CardVariant
  glass?: GlassCustomization
}

const glassVariants: Record<CardVariant, string> = {
  default: "",
  glass: "backdrop-blur-[20px] bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
  frosted: "backdrop-blur-[30px] bg-white/15 border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
  fluted: "backdrop-blur-[20px] bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] [background-image:repeating-linear-gradient(90deg,transparent_0px,rgba(255,255,255,0.05)_1px,transparent_2px,transparent_4px)]",
  crystal: "backdrop-blur-[15px] bg-white/5 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.2)]"
}

function Card({ className, variant = "default", glass, ...props }: CardProps) {
  const glassStyles = glass ? getGlassStyles(glass) : undefined
  
  return (
    <div
      data-slot="card"
      className={cn(
        "text-card-foreground flex flex-col gap-6 rounded-xl border py-6",
        variant === "default" ? "bg-card shadow-sm" : glassVariants[variant],
        className
      )}
      style={glassStyles}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
