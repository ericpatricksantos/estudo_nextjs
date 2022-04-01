import Link from 'next/link'
import Navbar from '../../components/Navbar';
export default function About(){
    return (
        <div>
        <Navbar/>
        <h1>About</h1>
        <Link href="/">Voltar</Link>
        </div>
    );
}