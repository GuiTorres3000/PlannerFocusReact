import { cx, type VariantProps } from "class-variance-authority";
import { badgeBGVariants } from "./badgeBGVariants";
import Text from "../Text/Text";
import { badgeTextVariants } from "./badgeTextVariants";
import Skeleton from "../Skeleton/Skeleton";
import { badgeSkeletonVariants } from "./badgeSkeletonVariants";

interface BadgeProps extends React.ComponentProps<"div">,
      VariantProps<typeof badgeBGVariants>{
            loading?: boolean; 
       }

export default function Badge({ variant, size, className, children, loading, ...props }: BadgeProps) {
      if(loading){
            return <Skeleton rounded="full" className={cx(badgeTextVariants({variant: "none"}), badgeSkeletonVariants({size}), className)}/>
      }
      return (
            <div className={badgeBGVariants({ variant, size, className })} {...props}>
                  <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
                        {children}
                  </Text>
            </div>
      );
}