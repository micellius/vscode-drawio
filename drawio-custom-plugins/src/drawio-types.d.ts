declare const Draw: {
    loadPlugin(handler: (ui: DrawioUI) => void): void;
};

declare const log: any;
declare class mxCellHighlight {
    constructor(graph: DrawioGraph, color: string, arg: number);

    public highlight(arg: DrawioCellState | null): void;
    public destroy(): void;
}

declare class mxMouseEvent {
    public readonly graphX: number;
    public readonly graphY: number;
}

declare const mxEvent: {
    DOUBLE_CLICK: string;
    CHANGE: string;
};

declare const mxUtils: {
	isNode(node: any): node is HTMLElement;
	createXmlDocument(): XMLDocument;
};


declare interface DrawioUI {
	editor: DrawioEditor;
}

declare interface DrawioEditor {
	graph: DrawioGraph;
}

declare interface DrawioGraph {
	insertVertex(arg0: undefined, arg1: null, label: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: string): void;
	addListener: any;
	model: DrawioGraphModel;
	getLabel(cell: DrawioCell): string;
    getSelectionModel(): DrawioGraphSelectionModel;
    view: DrawioGraphView;

    addMouseListener(listener: {
        mouseMove?: (graph: DrawioGraph, event: mxMouseEvent) => void;
        mouseDown?: (graph: DrawioGraph, event: mxMouseEvent) => void
        mouseUp?: (graph: DrawioGraph, event: mxMouseEvent) => void;
    }): void;
}

declare interface DrawioGraphView {
    getState(cell: DrawioCell): DrawioCellState;
    canvas: SVGElement;
}

declare interface DrawioCellState {
    cell: DrawioCell;
}

declare interface DrawioGraphSelectionModel {
	addListener(event: string, handler: (...args: any[]) => void): void;
    cells: DrawioCell[];
}

declare interface DrawioCell {
    id: string;
    style: string
}

declare interface DrawioGraphModel {
    setValue(c: DrawioCell, label: string): void;
    beginUpdate(): void;
    endUpdate(): void;
	cells: Record<any, DrawioCell>;
    setStyle(cell: DrawioCell, style: string): void;
    isVertex(cell: DrawioCell): boolean;
}