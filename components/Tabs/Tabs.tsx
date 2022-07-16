import { Tab as HeadlessUITab } from "@headlessui/react";
import React, { PropsWithChildren } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Withkey {
  key?: string;
}

const TabPanels = ({ children }: PropsWithChildren) => (
  <HeadlessUITab.Panels>{children}</HeadlessUITab.Panels>
);

const TabPanel = ({ children, key }: PropsWithChildren<Withkey>) => (
  <HeadlessUITab.Panel
    key={key}
    className={classNames(
      "rounded-xl bg-white p-3"
      // "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
    )}
  >
    {children}
  </HeadlessUITab.Panel>
);

const Tab = ({ children, key }: PropsWithChildren<Withkey>) => (
  <HeadlessUITab
    key={key}
    className={({ selected }) =>
      classNames(
        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
        selected
          ? "bg-white shadow"
          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
      )
    }
  >
    {children}
  </HeadlessUITab>
);

/**
 * `@headlessui/react`패키지 `Tab` 컴포넌트를 활용하여 스타일만 재지정 하였습니다.
 * @param param0
 * @returns
 */
const TabGroup = ({ children }: PropsWithChildren) => (
  <HeadlessUITab.Group>{children}</HeadlessUITab.Group>
);

const TabList = ({ children }: PropsWithChildren) => (
  <HeadlessUITab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
    {children}
  </HeadlessUITab.List>
);

export { Tab, TabGroup, TabList, TabPanel, TabPanels };
