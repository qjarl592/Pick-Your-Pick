import Image from "next/image";
import React from "react";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { TabInfoType } from "./TabSearchResult";

type Props = {
  tabInfo: TabInfoType;
};

export default function TabInfo(props: Props) {
  const { tabInfo } = props;
  const { title, artist, thumbnailUrl } = tabInfo;

  return (
    <>
      <div className="flex space-x-5 px-2 py-1 rounded-sm hover:bg-accent hover:text-accent-foreground">
        <Image src={thumbnailUrl} width={100} height={70} alt="" />
        <div className="flex flex-col">
          <Label className="text-lg">{title}</Label>
          <span className="text-sm">{artist}</span>
        </div>
      </div>
      <Separator className="my-2" />
    </>
  );
}
