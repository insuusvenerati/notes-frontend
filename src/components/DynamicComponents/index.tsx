import { Loading } from "components/Loading";
import dynamic from "next/dynamic";
import { Notes } from "../../queries/__generated__/Notes";

export const DynamicNotes = dynamic<{ data: Notes }>(
  import("components/Notes").then((mod) => mod.Notes),
  {
    loading: () => <Loading />,
  }
);

export const DynamicError = dynamic<{ error: Error }>(
  import("components/Error").then((mod) => mod.Error)
);
