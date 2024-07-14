import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { defaults } from "autoprefixer"

  
const ApplicationHistory = ({applications})=>{
    return (
        <Table className="my-6">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Job</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Applied on</TableHead>
      <TableHead className="text-right">interviews</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">37d</TableCell>
      <TableCell>Hired</TableCell>
      <TableCell>2024\7\12</TableCell>
      <TableCell className="text-right">4</TableCell>
    </TableRow>
  </TableBody>
</Table>
    )
}


export default ApplicationHistory;