/**
 * Simple professional Button component
 * Follows HooYia Sellam design system
 * Zero dependencies - pure React + Tailwind
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon: Icon,
  iconPosition = "left",
  className = "",
  disabled,
  ...props
}) {
  // Base styles - always applied
  const baseStyles = "inline-flex items-center justify-center font-black rounded-full transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 border border-primary",
    secondary: "bg-background text-secondary border border-border hover:border-primary hover:text-primary",
    outline: "bg-transparent text-secondary border border-border hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-secondary hover:bg-background hover:text-primary",
    icon: "bg-background text-secondary border border-border hover:border-primary hover:text-primary aspect-square",
  }[variant];

  // Size styles (ignored for icon-only buttons)
  const sizeStyles = {
    sm: "h-9 px-4 text-xs gap-1.5",
    md: "h-11 px-5 text-sm gap-2",
    lg: "h-14 px-7 text-base gap-2.5",
  }[size];

  // Detect icon-only mode
  const isIconOnly = variant === "icon" || (!children && Icon);
  
  // Build className with plain string concatenation
  const classes = `${baseStyles} ${variantStyles} ${isIconOnly ? "p-0" : sizeStyles} ${className}`.trim();

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <span 
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" 
          aria-hidden="true" 
        />
      )}
      
      {/* Left icon */}
      {!loading && Icon && iconPosition === "left" && (
        <Icon className="h-4 w-4" aria-hidden="true" />
      )}
      
      {/* Button text */}
      {children && <span>{children}</span>}
      
      {/* Right icon */}
      {!loading && Icon && iconPosition === "right" && (
        <Icon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}