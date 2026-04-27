'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '../../../lib/blog-posts';

const T = {
  teal: '#0E7C7B', tealDark: '#065F5E', tealLight: '#E0F4F4',
  navy: '#1A2B3C', navyAlt: '#2B2D42', body: '#4A5568',
  lightBg: '#F7FAFC', success: '#276749', terracotta: '#E2725B',
  warning: '#D97706', accentBlue: '#2B6CB0', border: '#E2E8F0', white: '#FFFFFF',
};

const categories = ['All', 'CPT Updates', 'Denial Management', 'Maternity Billing', '2027 Transition', 'Revenue Optimization', 'Compliance'];

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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'OBGYNBillingPro — OB/GYN Billing Knowledge Hub',
            description: 'CPT updates, denial management guides, maternity billing tips, and compliance updates for OB/GYN practices.',
            url: 'https://obgynbillingpro.com/blog',
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.2)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ color: T.tealLight, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>OB/GYN Billing Knowledge Hub</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 700, color: T.white, lineHeight: 1.2, maxWidth: 700, margin: '0 auto 16px' }}>
            OB/GYN Billing Knowledge Hub — CPT Updates, Denial Guides, Coding Tips
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E0', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
            Practical billing guidance written by CPC-OB certified coders for OB/GYN practices. Updated monthly with the latest payer policies and coding changes.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section style={{ background: T.white, padding: '32px 24px', borderBottom: `1px solid ${T.border}`, position: 'sticky', top: 70, zIndex: 20 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 20,
                border: `1px solid ${activeCategory === cat ? T.teal : T.border}`,
                background: activeCategory === cat ? T.teal : T.white,
                color: activeCategory === cat ? T.white : T.body,
                fontSize: 13,
                fontWeight: activeCategory === cat ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
              {cat !== 'All' && (
                <span style={{ marginLeft: 6, fontSize: 11, opacity: 0.7 }}>
                  ({blogPosts.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ background: T.lightBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 24px', color: T.body }}>No posts in this category yet.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                >
                  <article style={{ background: T.white, borderRadius: 14, overflow: 'hidden', border: `1px solid ${T.border}`, height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s, transform 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(14,124,123,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                  >
                    {/* Card image area */}
                    <div style={{ height: 160, background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, display: 'flex', alignItems: 'flex-end', padding: '16px 20px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(14,124,123,0.15)' }} />
                      <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: T.white,
                        background: categoryColors[post.category] || T.teal,
                        padding: '4px 12px', borderRadius: 10,
                      }}>
                        {post.category}
                      </span>
                    </div>
                    {/* Card body */}
                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h2 style={{ fontSize: 17, fontWeight: 700, color: T.navy, lineHeight: 1.4, marginBottom: 12, flex: 1 }}>
                        {post.title}
                      </h2>
                      <p style={{ fontSize: 14, color: T.body, lineHeight: 1.6, marginBottom: 16 }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
                        <div style={{ fontSize: 12, color: T.body }}>
                          <span style={{ fontWeight: 600, color: T.navy }}>{post.author}</span>
                          <span style={{ margin: '0 6px' }}>·</span>
                          {formatDate(post.date)}
                        </div>
                        <span style={{ fontSize: 12, color: T.teal, fontWeight: 600 }}>{post.readTime} min read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Calculator CTA */}
      <section style={{ background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>
            Reading about billing issues is one thing. Fixing them is another.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 32 }}>
            Use our free Revenue Leakage Calculator to see exactly how much your practice is leaving on the table — and get a personalized recovery estimate in 3 minutes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.white, color: T.teal, padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Free Revenue Leakage Calculator →
            </a>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
              Talk to a Specialist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
