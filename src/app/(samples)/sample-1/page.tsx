import { Template1 } from "@/app/shared/components";
import { buildSampleMetadata } from "../sample-metadata";
import "./sample-1.scss";

export const generateMetadata = () => buildSampleMetadata("sample1");

export default function Page() {
  return (
    <main className="sample-1">
      <Template1 />
    </main>
  );
}
