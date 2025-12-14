import { baseApi } from "../baseApi";

export interface ImportUserDto {
    name: string;
    email: string;
    phone: string;
    fatherName?: string;
    motherName?: string;
    address?: string;
    occupation?: string;
    nid?: string;
    referencePerson?: string;
    referencePhone?: string;
}

export interface ImportErrorDto {
    row: number;
    email?: string;
    name?: string;
    errors: string[];
}

export interface ImportResponseDto {
    totalRows: number;
    successCount: number;
    failedCount: number;
    skippedCount: number;
    errors: ImportErrorDto[];
    skippedEmails: string[];
    message: string;
}

export interface ImportConfigDto {
    defaultPassword?: string;
    defaultStatus?: "PENDING" | "ACTIVE" | "SUSPENDED" | "INACTIVE" | "REJECTED";
    skipDuplicates?: boolean;
}

export interface ImportTemplateStructure {
    requiredColumns: string[];
    optionalColumns: string[];
    sampleData: Record<string, string>[];
}

const importApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Import users from Excel file
        importUsers: builder.mutation<
            { success: boolean; message: string; data: ImportResponseDto },
            { file: File; config?: ImportConfigDto }
        >({
            query: ({ file, config }) => {
                const formData = new FormData();
                formData.append("file", file);

                // Append config fields if provided
                if (config?.defaultPassword) {
                    formData.append("defaultPassword", config.defaultPassword);
                }
                if (config?.defaultStatus) {
                    formData.append("defaultStatus", config.defaultStatus);
                }
                if (config?.skipDuplicates !== undefined) {
                    formData.append("skipDuplicates", String(config.skipDuplicates));
                }

                return {
                    url: "/admin/import/users",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["user"],
        }),

        // Get template structure
        getImportTemplate: builder.query<
            { success: boolean; message: string; data: ImportTemplateStructure },
            void
        >({
            query: () => ({
                url: "/admin/import/template",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useImportUsersMutation,
    useGetImportTemplateQuery,
} = importApi;
