import React = require("react");

interface TreeProps {
    id?: string;
    value: any;
    selectionMode?: string;
    selection?: any;
    layout?: string;
    style?: object;
    className?: string;
    metaKeySelection?: boolean;
    propagateSelectionUp?: boolean;
    propagateSelectionDown?: boolean;
    selectionChange?(e: {originalEvent: Event, selection: any}): void;
    onNodeSelect?(e: {originalEvent: Event, node: any}): void;
    onNodeUnselect?(e: {originalEvent: Event, node: any}): void;
    onNodeExpand?(): void;
    onNodeCollapse?(): void;
}

export class Tree extends React.Component<TreeProps,any> {}
