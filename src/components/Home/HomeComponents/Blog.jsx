const posts = [
    {
        id: 1,
        title: "You’re Not a Criminal, But You’re Going to Jail: My ICE Detention Story as a Canadian Citizen",
        href: "#",
        description: "I grew up in Whitehorse, Yukon, a small town in the northernmost part of Canada. I started working when I was 12 years old and always knew I wanted to do something bigger with my life.",
        imageUrl: "https://images.unsplash.com/photo-1743024282286-5bfecf55a834?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Mar 16, 2020",
        dateTime: "2020-03-16",
        category: [
            { title: "Marketing", href: "#" },
            { title: "IT", href: "#" },
        ],
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            imageUrl: 'https://images.unsplash.com/photo-1742306492021-817ebf6a344a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            href: '#',
        },
    },
    {
        id: 2,
        title: "What Game Theory Can Tell Us About Tariffs",
        href: "#",
        description: "Game theory was initially created to address two-person zero-sum games. In these instances, one participant’s gains or losses are exactly balanced by the losses and gains of the other participant.",
        imageUrl: "https://images.unsplash.com/photo-1742740981372-39252206c52d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Apr 10, 2021",
        dateTime: "2021-04-10",
        category: [
            { title: "Business", href: "#" },
            { title: "Finance", href: "#" },
        ],
        author: {
            name: "Sarah Johnson",
            role: "Marketing Lead",
            imageUrl: 'https://images.unsplash.com/photo-1742201835826-3b607fa4e8b2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            href: '#',
        },
    },
    {
        id: 3,
        title: "In the Writers’ Room Where It Happened: ‘Twin Peaks’",
        href: "#",
        description: "This week, I’ve asked my screenwriter Harley Peyton to serve as a guest contributor here. He got his start in Hollywood penning the adaptation of Bret Easton Ellis’s novel Less Than Zero (1987).",
        imageUrl: "https://images.unsplash.com/photo-1742740981372-39252206c52d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Apr 10, 2021",
        dateTime: "2021-04-10",
        category: [
            { title: "Business", href: "#" },
            { title: "Finance", href: "#" },
            { title: "Entertainment", href: "#" },
        ],
        author: {
            name: "Sarah Johnson",
            role: "Marketing Lead",
            imageUrl: 'https://images.unsplash.com/photo-1742201835826-3b607fa4e8b2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            href: '#',
        },
    },
    
];

const Blog = () => {
    return (
        <div className="py-24 bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className=" mx-auto text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        From the Blogs
                    </h2>
                    <p className="mt-2 leading-8 text-gray-600">
                        Stay updated with our latest insights and articles.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start">
                            <div className="relative w-full">
                                <img src={post.imageUrl} alt={post.title} className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-4 text-xs text-gray-600">
                                    <time dateTime={post.dateTime}>{post.date}</time>
                                    {post.category.map((cat, index) => (
                                        <a key={index} href={cat.href} className="relative z-10 rounded-full bg-red-50 hover:bg-red-100 px-3 py-1.5">
                                            {cat.title}
                                        </a>
                                    ))}
                                </div>
                                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
                                    <a href={post.href}>{post.title}</a>
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-3">
                                    {post.description}
                                </p>
                            </div>
                            <div className="flex items-center mt-6 gap-x-4">
                                <img src={post.author.imageUrl} className="w-10 h-10 bg-gray-100 rounded-full" alt={post.author.name} />
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>{post.author.name}</a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
