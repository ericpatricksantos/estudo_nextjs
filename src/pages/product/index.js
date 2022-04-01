import Link from 'next/link'
import Navbar from '../../../components/Navbar';

export default function Products(){
    return (
        <div>
            <Navbar/>
            <h1>Produtos</h1>
            <Link href="/">Voltar</Link>
        </div>
    );
}