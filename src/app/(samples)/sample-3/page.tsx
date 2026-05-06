import { Template3 } from "@/app/shared/components";
import { buildSampleMetadata } from "../sample-metadata";
import "./sample-3.scss";

export const generateMetadata = () => buildSampleMetadata("sample3");

export default function Page() {
  return (
    <main className="sample-3">
      <Template3 />
    </main>
  );
}
