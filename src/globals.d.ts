/* eslint-disable import/export  */
declare module "tailwind.macro" {
  export default function tw(a: TemplateStringsArray): string
}
declare module "react-table/lib/hoc/foldableTable" {
  import { Column, TableProps } from "react-table"
  interface FoldableColumn<T> extends Column<T> {
    foldable?: boolean
  }
  interface FoldableTableProps<D = any> extends TableProps<D> {
    columns: FoldableColumn<D>[]
  }
  export default function foldableTable<D>(
    a: React.ComponentType
  ): React.ComponentType<Partial<FoldableTableProps<D>>>
}
