"use client"

import { useState, useRef } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@workspace/ui/components/dialog"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Badge } from "@workspace/ui/components/badge"
import {
    Upload,
    FileSpreadsheet,
    X,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Download,
} from "lucide-react"
import { toast } from "sonner"
import { useImportUsersMutation, useGetImportTemplateQuery } from "@/redux/api/import/importApi"
import type { ImportResponseDto } from "@/redux/api/import/importApi"

interface ImportUserDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onImportComplete?: () => void
}

export function ImportUserDialog({ open, onOpenChange, onImportComplete }: ImportUserDialogProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [defaultPassword, setDefaultPassword] = useState("User@123")
    const [defaultStatus, setDefaultStatus] = useState<"PENDING" | "ACTIVE">("PENDING")
    const [skipDuplicates, setSkipDuplicates] = useState(true)
    const [importResult, setImportResult] = useState<ImportResponseDto | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [importUsers, { isLoading: isImporting }] = useImportUsersMutation()
    const { data: templateData } = useGetImportTemplateQuery()

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // Validate file type
            const validTypes = [
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "application/vnd.ms-excel",
            ]
            if (!validTypes.includes(file.type)) {
                toast.error("Invalid file type. Please upload an Excel file (.xlsx or .xls)")
                return
            }
            // Validate file size (10MB)
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size must be less than 10MB")
                return
            }
            setSelectedFile(file)
            setImportResult(null)
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file) {
            const validTypes = [
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "application/vnd.ms-excel",
            ]
            if (!validTypes.includes(file.type)) {
                toast.error("Invalid file type. Please upload an Excel file (.xlsx or .xls)")
                return
            }
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size must be less than 10MB")
                return
            }
            setSelectedFile(file)
            setImportResult(null)
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleRemoveFile = () => {
        setSelectedFile(null)
        setImportResult(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const handleImport = async () => {
        if (!selectedFile) {
            toast.error("Please select a file to import")
            return
        }

        try {
            const result = await importUsers({
                file: selectedFile,
                config: {
                    defaultPassword,
                    defaultStatus,
                    skipDuplicates,
                },
            }).unwrap()

            setImportResult(result.data)
            toast.success(result.message || "Import completed successfully")

            if (onImportComplete) {
                onImportComplete()
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to import users")
            console.error("Import error:", error)
        }
    }

    const handleClose = () => {
        setSelectedFile(null)
        setImportResult(null)
        setDefaultPassword("User@123")
        setDefaultStatus("PENDING")
        setSkipDuplicates(true)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
        onOpenChange(false)
    }

    const downloadTemplate = () => {
        if (!templateData?.data) {
            toast.error("Template data not available")
            return
        }

        // Create a simple sample CSV
        const { requiredColumns, optionalColumns, sampleData } = templateData.data
        const allColumns = [...requiredColumns, ...optionalColumns]

        // Create CSV content
        let csvContent = allColumns.join(",") + "\n"
        sampleData.forEach((row) => {
            const values = allColumns.map((col) => row[col] || "")
            csvContent += values.join(",") + "\n"
        })

        // Create and download file
        const blob = new Blob([csvContent], { type: "text/csv" })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "user_import_template.csv"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)

        toast.success("Template downloaded successfully")
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <FileSpreadsheet className="h-5 w-5 text-blue-600" />
                        Import Users from Excel
                    </DialogTitle>
                    <DialogDescription>
                        Upload an Excel file (.xlsx or .xls) to bulk import users. Maximum file size: 10MB
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Template Download Button */}
                    <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                        <div>
                            <p className="text-sm font-medium text-gray-900">Need a template?</p>
                            <p className="text-xs text-gray-600">Download the sample template to see the required format</p>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={downloadTemplate}
                            className="gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download Template
                        </Button>
                    </div>

                    {/* File Upload Area */}
                    <div>
                        <Label>Upload File</Label>
                        <div
                            className={`mt-2 border-2 border-dashed rounded-lg p-8 text-center transition-colors ${selectedFile
                                    ? "border-green-300 bg-green-50"
                                    : "border-gray-300 hover:border-blue-400 bg-gray-50"
                                }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {selectedFile ? (
                                <div className="space-y-4">
                                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                                        <p className="text-xs text-gray-600">
                                            {(selectedFile.size / 1024).toFixed(2)} KB
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleRemoveFile}
                                        className="gap-2"
                                    >
                                        <X className="h-4 w-4" />
                                        Remove File
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Drop your Excel file here, or click to browse
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Supports .xlsx and .xls files up to 10MB
                                        </p>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".xlsx,.xls"
                                        onChange={handleFileSelect}
                                        className="hidden"
                                        id="file-upload"
                                    />
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="gap-2"
                                    >
                                        <FileSpreadsheet className="h-4 w-4" />
                                        Select File
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Configuration Options */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-900">Import Configuration</h4>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="defaultPassword">Default Password</Label>
                                <Input
                                    id="defaultPassword"
                                    type="text"
                                    value={defaultPassword}
                                    onChange={(e) => setDefaultPassword(e.target.value)}
                                    placeholder="User@123"
                                />
                                <p className="text-xs text-gray-600">
                                    Password for all imported users
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="defaultStatus">Default Status</Label>
                                <Select value={defaultStatus} onValueChange={(value: any) => setDefaultStatus(value)}>
                                    <SelectTrigger id="defaultStatus">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="PENDING">PENDING</SelectItem>
                                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-xs text-gray-600">
                                    Status for imported users
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="skipDuplicates"
                                checked={skipDuplicates}
                                onCheckedChange={(checked) => setSkipDuplicates(checked as boolean)}
                            />
                            <div className="space-y-1">
                                <label
                                    htmlFor="skipDuplicates"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                >
                                    Skip Duplicate Users
                                </label>
                                <p className="text-xs text-gray-600">
                                    Skip users that already exist (based on email, phone, or NID) instead of failing
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Import Results */}
                    {importResult && (
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-gray-900">Import Results</h4>

                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-gray-900">{importResult.totalRows}</div>
                                    <div className="text-xs text-gray-600">Total Rows</div>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-green-600">{importResult.successCount}</div>
                                    <div className="text-xs text-gray-600">Successful</div>
                                </div>
                                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-yellow-600">{importResult.skippedCount}</div>
                                    <div className="text-xs text-gray-600">Skipped</div>
                                </div>
                                <div className="bg-red-50 p-3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-red-600">{importResult.failedCount}</div>
                                    <div className="text-xs text-gray-600">Failed</div>
                                </div>
                            </div>

                            {importResult.errors.length > 0 && (
                                <div className="max-h-48 overflow-y-auto space-y-2">
                                    <p className="text-sm font-medium text-gray-900">Errors:</p>
                                    {importResult.errors.map((error, index) => (
                                        <div key={index} className="bg-red-50 p-3 rounded-lg border border-red-200">
                                            <div className="flex items-start gap-2">
                                                <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                <div className="flex-1 text-xs">
                                                    <p className="font-medium text-red-900">Row {error.row}</p>
                                                    {error.email && <p className="text-red-700">{error.email}</p>}
                                                    <ul className="list-disc list-inside mt-1 text-red-700">
                                                        {error.errors.map((err, i) => (
                                                            <li key={i}>{err}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {importResult.skippedEmails.length > 0 && (
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-2">
                                        Skipped Emails ({importResult.skippedEmails.length}):
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {importResult.skippedEmails.slice(0, 10).map((email, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {email}
                                            </Badge>
                                        ))}
                                        {importResult.skippedEmails.length > 10 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{importResult.skippedEmails.length - 10} more
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={handleClose} disabled={isImporting}>
                        {importResult ? "Close" : "Cancel"}
                    </Button>
                    {!importResult && (
                        <Button
                            onClick={handleImport}
                            disabled={!selectedFile || isImporting}
                            className="gap-2"
                        >
                            {isImporting && <Loader2 className="h-4 w-4 animate-spin" />}
                            {isImporting ? "Importing..." : "Import Users"}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
