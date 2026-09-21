import { redirect } from "next/navigation";
import { ORDER_URL } from "@/lib/links";

export default function PedidoPage() {
  redirect(ORDER_URL);
}
