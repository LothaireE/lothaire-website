import { Component, type ErrorInfo, type ReactNode } from "react";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

type Locale = "fr" | "en";

const messages = { fr, en } as const;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  locale: Locale;
}

function getNestedValue(obj: unknown, path: string): string {
  if (!obj || typeof obj !== "object") return path;

  const value = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);

  return typeof value === "string" ? value : path;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      locale: (localStorage.getItem("locale") as Locale) || "fr",
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      locale: (localStorage.getItem("locale") as Locale) || "fr",
    });
  };

  t = (path: string) => {
    return getNestedValue(messages[this.state.locale], path);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-md space-y-4 text-center">
            <h1 className="text-2xl font-semibold">
              {this.t("errorBoundary.fallback.title")}
            </h1>
            <p className="text-muted-foreground">
              {this.t("errorBoundary.fallback.message")}
            </p>
            <button onClick={this.handleReset}>
              {this.t("errorBoundary.fallback.button")}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
