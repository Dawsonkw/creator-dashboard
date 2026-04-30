export const API_BASE_URL = "http://localhost:3000/api";

export async function apiFetch<T>(endpoint: string): Promise<T> {
    const cleanEndpoint = endpoint.startsWith("/") 
        ? endpoint.slice(1)
        : endpoint;

    const res = await fetch(`${API_BASE_URL}/${cleanEndpoint}`);

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }
    return res.json();
}