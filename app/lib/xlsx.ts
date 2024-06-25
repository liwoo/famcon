import xlsx, { IJsonSheet } from "json-as-xlsx";
import { contributors } from "@/components/contributions/data";

export function downloadToExcel() {
  console.log("downloadToExcel");
  // let columns: IJsonSheet[] = [
  //   {
  //     sheet: "Contributors",
  //     columns: [
  //       { label: "Person ID", value: "id" },
  //       { label: "First Name", value: "first_name" },
  //       { label: "Last Name", value: "last_name" },
  //       { label: "Email", value: "email" },
  //       { label: "Gender", value: "gender" },

  //     ],
  //     content: contributors,
  //   },
  // ];

  // let settings = {
  //   fileName: "Contributors Excel",
  // };

  // xlsx(columns, settings);
}
