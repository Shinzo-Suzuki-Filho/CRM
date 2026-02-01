import "nativewind/types";
import { ViewProps, TextProps, ScrollViewProps, ImageProps, TouchableOpacityProps, TextInputProps } from "react-native";
import { LucideProps } from "lucide-react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ScrollViewProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  interface TextInputProps {
    className?: string;
  }
}

declare module "lucide-react-native" {
  interface LucideProps {
    className?: string;
  }
}
