import React from "react";

export function Copyright() {
    return (
        <div className="text-white p-4">
            Feito com 💜 no NLW da{' '} 
            <a
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-100"
                href="https://rockseat.com.br"
            >
                Rocketseat
            </a>
        </div>
    );
}
