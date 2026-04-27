import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getPostBySlug, getRelatedPosts } from '../../../../lib/blog-posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} │ OBGYNBillingPro`,
    description: post.excerpt,
    alternates: { canonical: `https://obgynbillingpro.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://obgynbillingpro.com/blog/${post.slug}`,
      siteName: 'OBGYNBillingPro',
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
  };
}

const T = {
  teal: '#0E7C7B', tealDark: '#065F5E', tealLight: '#E0F4F4',
  navy: '#1A2B3C', navyAlt: '#2B2D42', body: '#4A5568',
  lightBg: '#F7FAFC', success: '#276749', terracotta: '#E2725B',
  warning: '#D97706', accentBlue: '#2B6CB0', border: '#E2E8F0', white: '#FFFFFF',
};

const categoryColors: Record<string, string> = {
  'CPT Updates': T.teal,
  'Denial Management': '#E53E3E',
  'Maternity Billing': T.accentBlue,
  '2027 Transition': T.warning,
  'Revenue Optimization': T.success,
  'Compliance': T.navyAlt,
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 700, color: T.navy, marginTop: 40, marginBottom: 16, paddingBottom: 10, borderBottom: `2px solid ${T.tealLight}` }}>
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, color: T.navy, marginTop: 28, marginBottom: 10 }}>
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} style={{ fontSize: 15, fontWeight: 700, color: T.navy, marginBottom: 8 }}>
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(lines[i].trim().replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {listItems.map((item, j) => {
            const parts = item.split('**');
            return (
              <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: T.body, lineHeight: 1.6 }}>
                <span style={{ color: T.teal, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>›</span>
                <span>{parts.map((p, k) => k % 2 === 1 ? <strong key={k} style={{ color: T.navy }}>{p}</strong> : p)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else if (line !== '') {
      const parts = line.split('**');
      elements.push(
        <p key={i} style={{ fontSize: 15, color: T.body, lineHeight: 1.8, marginBottom: 16 }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: T.navy, fontWeight: 600 }}>{p}</strong> : p)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const catColor = categoryColors[post.category] || T.teal;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'OBGYNBillingPro', url: 'https://obgynbillingpro.com' },
    datePublished: post.date,
    url: `https://obgynbillingpro.com/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '64px 24px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span>›</span>
            <span style={{ color: catColor }}>{post.category}</span>
          </div>
          {/* Category badge */}
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.white, background: catColor, padding: '4px 12px', borderRadius: 10, marginBottom: 20 }}>
            {post.category}
          </span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, color: T.white, lineHeight: 1.25, marginBottom: 20 }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: T.teal }}>
                {post.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.white }}>{post.author}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{formatDate(post.date)}</div>
              </div>
            </div>
            <span style={{ fontSize: 13, color: T.tealLight, background: 'rgba(14,124,123,0.2)', padding: '4px 12px', borderRadius: 8 }}>
              {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar layout */}
      <section style={{ background: T.white, padding: '56px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>
          {/* Article body */}
          <article>
            <p style={{ fontSize: 16, color: T.body, lineHeight: 1.8, marginBottom: 24, padding: '20px 24px', background: T.tealLight, borderRadius: 10, borderLeft: `4px solid ${T.teal}`, fontWeight: 500 }}>
              {post.excerpt}
            </p>
            <div style={{ fontSize: 15, lineHeight: 1.8, color: T.body }}>
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: T.body, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>Category</div>
              <span style={{ background: catColor, color: T.white, fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 10 }}>{post.category}</span>
            </div>

            {/* Share */}
            <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: T.body }}>Share:</span>
              {['Twitter / X', 'LinkedIn', 'Email'].map((s) => (
                <span key={s} style={{ fontSize: 12, color: T.teal, background: T.tealLight, padding: '5px 12px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>{s}</span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* CTA Box */}
            <div style={{ background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`, borderRadius: 14, padding: 28, color: T.white }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.tealLight, marginBottom: 12 }}>Free Tool</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Is your practice losing revenue?</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 20 }}>
                Use our free Revenue Leakage Calculator to see exactly how much your OB/GYN practice is leaving on the table.
              </p>
              <Link href="/calculator" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: T.white, color: T.teal, padding: '12px 20px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                Free Calculator →
              </Link>
            </div>

            {/* Related service */}
            <div style={{ background: T.lightBg, borderRadius: 14, padding: 24, border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.teal, marginBottom: 12 }}>Related Service</div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: T.navy, marginBottom: 10 }}>{post.relatedService}</h4>
              <Link href={post.relatedServiceHref} style={{ display: 'flex', alignItems: 'center', gap: 6, color: T.teal, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                Learn more →
              </Link>
            </div>

            {/* Get Free Audit */}
            <div style={{ background: T.navy, borderRadius: 14, padding: 24 }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: T.white, marginBottom: 10 }}>Ready to fix these issues in your practice?</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 16 }}>Get a free revenue audit — we&apos;ll review your last 90 days of claims at no charge.</p>
              <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: T.teal, color: T.white, padding: '11px 18px', borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                Free Revenue Audit
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ background: T.lightBg, padding: '64px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: T.navy, marginBottom: 32 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: T.white, borderRadius: 12, padding: 24, border: `1px solid ${T.border}`, height: '100%' }}>
                    <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: T.white, background: categoryColors[rp.category] || T.teal, padding: '3px 10px', borderRadius: 8, marginBottom: 12, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {rp.category}
                    </span>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: T.navy, lineHeight: 1.4, marginBottom: 10 }}>{rp.title}</h3>
                    <p style={{ fontSize: 13, color: T.body, lineHeight: 1.6, marginBottom: 12 }}>{rp.excerpt.slice(0, 100)}…</p>
                    <span style={{ fontSize: 12, color: T.teal, fontWeight: 600 }}>{rp.readTime} min read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '64px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>
            Put This Into Action for Your Practice
          </h2>
          <p style={{ fontSize: 16, color: '#CBD5E0', lineHeight: 1.7, marginBottom: 32 }}>
            Reading about OB/GYN billing issues is a start. Let our certified specialists review your specific claims and tell you exactly where your revenue is leaking.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Free Revenue Audit →
            </Link>
            <Link href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Revenue Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
