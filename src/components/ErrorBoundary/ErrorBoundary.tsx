import { Component, ErrorInfo } from "react";
import type { IErrorBoundaryProps, IErrorBoundaryState } from "./interfaces";

export default class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h2 className="sega">Something went wrong...</h2>
    ) : (
      this.props.children
    );
  }
}
