"use client";

import { useRef, useState } from "react";
import { BrandMark } from "@/components/layout/Header";

export function PlatformIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !frameRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    frameRef.current.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`;
    frameRef.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (frameRef.current) {
      frameRef.current.style.transform = "";
      frameRef.current.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`hero-dashboard-wrapper ${!isHovered ? "hero-dashboard-floating" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label="Bridge Dynamics Enterprise Dashboard Mockup"
    >
      {/* Soft blue elliptical glow under the product frame */}
      <div className="hero-dashboard-glow" aria-hidden="true" />

      {/* Floating product UI mockup frame */}
      <div ref={frameRef} className="dashboard-frame">
        <div className="dashboard-body">
          {/* Left Sidebar */}
          <aside className="dashboard-sidebar">
            <div className="sidebar-brand">
              <BrandMark />
              <span className="sidebar-brand-title"> Bridge <strong>Dynamics</strong></span>
            </div>

            <nav className="sidebar-nav">
              <div className="sidebar-item sidebar-item--active">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Overview</span>
              </div>
              <div className="sidebar-item">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="7" y1="8" x2="17" y2="8" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                  <line x1="7" y1="16" x2="13" y2="16" />
                </svg>
                <span>Operations</span>
              </div>
              <div className="sidebar-item">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>Finance</span>
              </div>
              <div className="sidebar-item">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>People</span>
              </div>
              <div className="sidebar-item">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-3-3.87" />
                  <path d="M7 23v-2a4 4 0 013-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                <span>Customers</span>
              </div>
              <div className="sidebar-item">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <span>Analytics</span>
              </div>
              <div className="sidebar-item">
                <svg className="nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
                <span>Settings</span>
              </div>
            </nav>

            <div className="sidebar-user">
              <div className="avatar">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="user-info">
                <strong>Alex Morgan</strong>
                <span>Admin ∨</span>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="dashboard-content">
            {/* Header Controls */}
            <div className="content-header">
              <h2>Enterprise Operations Control</h2>
              <div className="header-controls">
                <div className="date-picker-pill">
                  <span className="date-picker-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    May 12 – Jun 12, 2024
                  </span>
                  <span>∨</span>
                </div>
                <div className="icon-btn-bell" title="Notifications">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
              </div>
            </div>

            {/* KPI Cards Row (4 cards) */}
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="card-top-icon icon--blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <span className="metric-label">Total Revenue</span>
                <strong className="metric-value">$128.7M</strong>
                <span className="metric-trend trend--up">↑ 12.4% <small>vs Apr 12 – May 12, 2024</small></span>
              </div>

              <div className="metric-card">
                <div className="card-top-icon icon--blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <span className="metric-label">EBITDA</span>
                <strong className="metric-value">$29.4M</strong>
                <span className="metric-trend trend--up">↑ 8.7% <small>vs Apr 12 – May 12, 2024</small></span>
              </div>

              <div className="metric-card">
                <div className="card-top-icon icon--blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="metric-label">Operations Efficiency</span>
                <strong className="metric-value">92.1%</strong>
                <span className="metric-trend trend--up">↑ 4.3% <small>vs Apr 12 – May 12, 2024</small></span>
              </div>

              <div className="metric-card">
                <div className="card-top-icon icon--blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-3-3.87" />
                    <path d="M7 23v-2a4 4 0 013-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <span className="metric-label">Active Customers</span>
                <strong className="metric-value">2,847</strong>
                <span className="metric-trend trend--up">↑ 7.6% <small>vs Apr 12 – May 12, 2024</small></span>
              </div>
            </div>

            {/* Performance Overview Chart Panel */}
            <div className="chart-panel">
              <div className="panel-header">
                <div className="panel-title-group">
                  <h3>Performance Overview</h3>
                  <div className="legend-group">
                    <span className="legend-item"><i className="dot-blue" /> This Period</span>
                    <span className="legend-item"><i className="dot-gray" /> Prior Period</span>
                  </div>
                </div>
                <div className="time-filter-pill">Daily ∨</div>
              </div>

              <div className="chart-graphic-wrap">
                <div className="y-axis">
                  <span>$40M</span>
                  <span>$30M</span>
                  <span>$20M</span>
                  <span>$10M</span>
                  <span>$0</span>
                </div>
                <div className="chart-area">
                  <svg viewBox="0 0 500 130" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="primaryCurveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#15518d" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#15518d" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" y1="10" x2="500" y2="10" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                    {/* Area fill for upper curve */}
                    <path
                      d="M0,85 Q60,75 120,65 T240,50 T360,40 T500,12 L500,120 L0,120 Z"
                      fill="url(#primaryCurveGradient)"
                    />
                    {/* Prior Period (Muted Gray Line) */}
                    <path
                      d="M0,100 Q70,90 140,82 T280,72 T420,60 T500,55"
                      stroke="#475569"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Primary Curve Line (Bright Blue) */}
                    <path
                      d="M0,85 Q60,75 120,65 T240,50 T360,40 T500,12"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </svg>
                  <div className="x-axis">
                    <span>May 12</span>
                    <span>May 19</span>
                    <span>May 26</span>
                    <span>Jun 02</span>
                    <span>Jun 09</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
