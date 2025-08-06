import type { VariantProps } from "class-variance-authority";
import { badgeBGVariants } from "./badgeBGVariants";
import Text from "./Text";
import { badgeTextVariants } from "./badgeTextVariants";

interface BadgeProps extends React.ComponentProps<"div">,
      VariantProps<typeof badgeBGVariants> { }

export default function Badge({ variant, size, className, children, ...props }: BadgeProps) {
      return (
            <div className={badgeBGVariants({ variant, size, className })} {...props}>
                  <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
                        {children}
                  </Text>
            </div>
      );
}