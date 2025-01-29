import { Layout } from "@/components/layout";
import { Calendar } from "@/components/calendar";
import DataTable from "@/components/data-table";

export default function Page() {
  return (
    <Layout>
      <DataTable />
      <Calendar />
    </Layout>
  );
}
