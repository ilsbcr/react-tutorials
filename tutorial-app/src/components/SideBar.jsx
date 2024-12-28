import "./styles/SideBar.css";

export default function SideBar() {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <h2>Pages</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
            <div className="actions">
            <h2>Actions</h2>
            <button onClick={() => alert('Button 1 clicked')}>Button 1</button>
            <button onClick={() => alert('Button 2 clicked')}>Button 2</button>

            </div>
            
        </div>
    );
}