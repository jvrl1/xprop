import { NextRequest, NextResponse } from "next/server";
import { api } from "../../../../lib/api";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const redirect = request.cookies.get('redirectTo')?.value;

    // Realiza uma chamada para a API para registrar o código
    const registerResponse = await api.post('/register', { code });
    const { token } = registerResponse.data;

    // Configura o URL de redirecionamento, padrão para '/'
    const redirectURL = redirect ?? '/';

    // Define a duração do cookie em segundos (30 dias)
    const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

    // Configura o cookie com o token
    const cookie = `token=${token}; path=/; max-age=${cookieExpiresInSeconds};`;

    // Redireciona com o cookie
    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-cookie': cookie,
        },
    });
}
