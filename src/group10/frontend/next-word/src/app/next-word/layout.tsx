import React from 'react';

function Layout({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-2 bg-white p-8 rounded-lg shadow-lg w-full ">
            {children}
        </div>
    );
}

export default Layout;