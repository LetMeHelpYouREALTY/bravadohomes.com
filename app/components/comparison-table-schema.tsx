import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

interface ComparisonRow {
  feature: string
  [key: string]: string | number // Dynamic columns (e.g., "summerlin", "henderson", "centennial-hills")
}

interface ComparisonTableSchemaProps {
  title: string
  description: string
  columns: string[] // Column headers (e.g., ["Feature", "Summerlin", "Henderson", "Centennial Hills"])
  rows: ComparisonRow[]
  pageUrl?: string
}

export default async function ComparisonTableSchema({
  title,
  description,
  columns,
  rows,
  pageUrl
}: ComparisonTableSchemaProps) {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  // Convert rows to Table schema format
  const tableRows = rows.map((row, index) => {
    const cells = columns.map((col, colIndex) => {
      if (colIndex === 0) {
        return {
          "@type": "TableCell",
          "text": row.feature
        }
      }
      return {
        "@type": "TableCell",
        "text": String(row[col.toLowerCase().replace(/\s+/g, '-')] || row[columns[colIndex]] || '')
      }
    })
    
    return {
      "@type": "TableRow",
      "position": index + 1,
      "tableCells": cells
    }
  })

  // Create header row
  const headerRow = {
    "@type": "TableRow",
    "position": 0,
    "tableCells": columns.map(col => ({
      "@type": "TableCell",
      "text": col
    }))
  }

  const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": {
      "@type": "Thing",
      "name": title,
      "description": description
    },
    "headline": title,
    "description": description,
    "tableHead": [headerRow],
    "tableBody": tableRows,
    "author": {
      "@type": "Person",
      "name": agent?.name || "Dr. Jan Duffy",
      "identifier": agent?.licenseNumber || "S.0197614"
    },
    "publisher": {
      "@type": "Organization",
      "name": config.businessName,
      "url": baseUrl
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
      />
    </>
  )
}

// Helper component to render the actual HTML table
export function ComparisonTable({ 
  title, 
  columns, 
  rows 
}: { 
  title: string
  columns: string[]
  rows: ComparisonRow[]
}) {
  return (
    <div className="overflow-x-auto mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <tr>
            {columns.map((col, index) => (
              <th 
                key={index}
                className={`px-6 py-4 text-left font-semibold ${
                  index === 0 ? 'sticky left-0 z-10 bg-gradient-to-r from-blue-600 to-purple-600' : ''
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className="hover:bg-blue-50 transition-colors"
            >
              {columns.map((col, colIndex) => {
                const cellValue = colIndex === 0 
                  ? row.feature 
                  : (row[col.toLowerCase().replace(/\s+/g, '-')] || row[columns[colIndex]] || '')
                return (
                  <td 
                    key={colIndex}
                    className={`px-6 py-4 text-gray-700 ${
                      colIndex === 0 ? 'font-semibold sticky left-0 z-10 bg-white' : ''
                    }`}
                  >
                    {cellValue}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
