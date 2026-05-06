import { Template2 } from "@/app/shared/components";
import { buildSampleMetadata } from "../sample-metadata";
import "./sample-2.scss";

export const generateMetadata = () => buildSampleMetadata("sample2");

export default function Page() {
  return (
    <main className="sample-2">
      <Template2 />
    </main>
  );
}
