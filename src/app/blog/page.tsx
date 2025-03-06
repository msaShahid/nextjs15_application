export default async function Profile(){

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delay for loading testing")
        }, 2000)
    });

    return <h1 >Welcome to Blog</h1>
}