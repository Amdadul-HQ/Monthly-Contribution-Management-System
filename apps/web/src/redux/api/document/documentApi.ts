import { baseApi } from "../baseApi";

// ============================================
// TypeScript Interfaces
// ============================================

export interface UploadDocumentResponseDto {
    publicId: string;
    secureUrl: string;
    originalName: string;
    format: string;
    resourceType: string;
    bytes: number;
}

export interface UploadMetadataDto {
    folder?: string;
    tags?: string[];
}

export interface UploadDocumentResponse {
    success: boolean;
    message: string;
    data: UploadDocumentResponseDto;
}

export interface DeleteDocumentResponse {
    success: boolean;
    message: string;
}

// ============================================
// API Endpoints
// ============================================

const documentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Upload document to Cloudinary
        uploadDocument: builder.mutation<UploadDocumentResponse, FormData>({
            query: (formData) => ({
                url: "/documents/upload",
                method: "POST",
                body: formData,
            }),
        }),

        // Delete document from Cloudinary
        deleteDocument: builder.mutation<DeleteDocumentResponse, string>({
            query: (publicId) => ({
                url: `/documents/${encodeURIComponent(publicId)}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useUploadDocumentMutation,
    useDeleteDocumentMutation,
} = documentApi;
