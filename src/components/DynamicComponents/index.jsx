import { Loading } from "components/Loading";
import dynamic from "next/dynamic";

export const DynamicNotes = dynamic(
  import("components/Notes").then((mod) => mod.Notes),
  {
    // eslint-disable-next-line react/display-name
    loading: () => <Loading />,
  }
);

export const DynamicError = dynamic(import("components/Error").then((mod) => mod.Error));
