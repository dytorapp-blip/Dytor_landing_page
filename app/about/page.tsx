// Metadata exports are not allowed in client components; relying on DefaultSeo
import { redirect } from "next/navigation";

export default function AboutRedirect() {
  redirect('/docs');
}
