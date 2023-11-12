import { Component, ReactNode } from 'react'

import { ErrorComponent } from '@shared/ui/errorComponent'

interface ErrorBoundaryState {
    hasError: boolean
}

interface ErrorBoundaryProps {
    children: ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorComponent messageText='Произошла вакханалия' />
        }

        return this.props.children
    }
}
