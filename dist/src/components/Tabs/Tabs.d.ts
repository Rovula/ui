import React from "react";
interface Tab {
    label: string;
    content: React.ReactNode;
}
interface TabsProps {
    tabs: Tab[];
    initialTab?: number;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
