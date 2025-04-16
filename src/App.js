import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Navigation Component
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <i className="fas fa-robot"></i>
          <span>AI Cases</span>
        </Link>
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="AI 기술 사례 검색" />
        </div>
      </div>
      <div className="nav-middle">
        <Link to="/" className="nav-item active">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/users" className="nav-item">
          <i className="fas fa-users"></i>
        </Link>
        <Link to="/analytics" className="nav-item">
          <i className="fas fa-chart-bar"></i>
        </Link>
        <Link to="/innovations" className="nav-item">
          <i className="fas fa-lightbulb"></i>
        </Link>
      </div>
      <div className="nav-right">
        <button className="nav-item">
          <i className="fas fa-bell"></i>
        </button>
        <button className="nav-item">
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
    </nav>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <i className="fas fa-user"></i>
        <span>프로필</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-bookmark"></i>
        <span>저장된 사례</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-industry"></i>
        <span>산업 분야</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-microchip"></i>
        <span>AI 기술</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-calendar-alt"></i>
        <span>이벤트</span>
      </div>
    </div>
  );
};

// Main Content Component
const MainContent = () => {
  const posts = [
    {
      id: 1,
      author: "반도체 산업 연구소",
      time: "방금 전",
      title: "AI 활용 반도체 분야 경쟁력 확보",
      content: "반도체 산업에서도 다양한 방면으로 AI를 활용한 혁명이 진행중에 있으며 반도체 수율/성능 개선을 위해 Big Data 학습을 통한 AI기반 불량 검출, 선단 공정에서 발생하는 다양한 불량에 대한 정의, Y value 자동 확보, In FAB 설비 및 Test 시 발생되는 Mega Data를 활용한 불량 인자 발굴 및 개선 방향 도출과 AI 활용 반도체 수율/성능 개선을 통한 수율 개선 수율 개선, 기존 방법론 활용 수율 개선 한계 도달, AI 활용하여 찾기 어려운 불량 유형도 검출 가능 (사람 10종 확인, AI 20 종 검출 가능), AI 활용하여 수율 저해 불량에 대한 빠른 검출이 분석 가능. AI 활용 Wafer Map 분석을 통한 불량 검출이 다양한 불량이 동시 다발적으로 WF에 전사와 동시 불량 검출 및 수치화가 중요합니다. 이를 통행 반도체 분야 AI활용 경쟁력을 확보 할 수 있습니다.",
      image: "https://via.placeholder.com/600x400?text=Semiconductor+AI+Innovation",
      likes: 456,
      comments: 78,
      shares: 145
    },
    {
      id: 2,
      author: "삼성SDI",
      time: "1시간 전",
      title: "배터리 제조 공정의 AI 비전 검사 기술 혁신",
      content: "첨단 배터리 제조 과정에서 AI 비전 검사 기술과 3D CT 스캔 기술을 혁신적으로 도입했습니다. 4초 내 이미지 생성이 가능한 SFA 장비를 통해 생산 속도를 유지하면서도 정밀 검사가 가능해졌습니다. AI 비전 검사 시스템은 실시간 결함 감지, 고해상도 카메라와 AI 알고리즘 활용, 데이터 기반 머신러닝 결함 예측 등의 주요 기능을 제공합니다. 이를 통해 스마트 팩토리 구축, 생산 비용 절감, 결함 감지율 증가 등의 효과를 달성했습니다.",
      image: "https://via.placeholder.com/600x400?text=AI+Vision+Inspection",
      likes: 342,
      comments: 56,
      shares: 28
    },
    {
      id: 3,
      author: "Legal Tech Today",
      time: "3시간 전",
      title: "Legal Tech: 법률과 AI의 혁명적 융합",
      content: "글로벌 리걸테크 시장이 연간 58조원 규모로 급성장하고 있습니다. 생성형 AI(GAI) 기술 도입으로 법률 서비스 환경이 빠르게 변화 중이며, 2040년대에는 AI 시스템이 인간의 지성과 감성을 능가하는 기술적 특이점이 도래할 것으로 전망됩니다. 현재 이미 생산성이 2-4배 향상되었으며, 전 세계적으로 3000개 이상의 리걸테크 기업이 법원 및 변호사협회와 협력하고 있습니다.",
      image: "https://via.placeholder.com/600x400?text=Legal+Tech+AI",
      likes: 567,
      comments: 89,
      shares: 123
    },
    {
      id: 4,
      author: "유한양행",
      time: "5시간 전",
      title: "AI 기반 신약 개발 전략 혁신",
      content: "AI를 활용한 신약개발로 기존 10-15년 소요되던 개발 기간을 4-7년으로 단축할 수 있게 되었습니다. 후보물질 발굴이 수개월 내 완료되며, 임상시험 개선과 정밀 타깃 설정으로 성공률이 크게 향상되었습니다. 개발 비용도 기존 2조원에서 50% 이상 절감이 가능해졌습니다. 2024년 12월, 바이오 AI 전문기업 온코마스터, 휴레이포지티브와의 협력을 통해 AI 기반 혁신 신약 개발 체계를 본격 도입했습니다.",
      image: "https://via.placeholder.com/600x400?text=AI+Drug+Development",
      likes: 423,
      comments: 67,
      shares: 91
    },
    {
      id: 5,
      author: "삼성전자 네트워크사업부",
      time: "6시간 전",
      title: "AI 기반 네트워크 최적화 및 에너지 절감",
      content: "5G 시대의 Mobile Traffic 급증과 에너지 소비 증가 문제를 해결하기 위해 AI 기술을 도입했습니다. 기지국 밀집화, 고출력 안테나(Massive MIMO) 운영, 24/7 운영으로 인한 에너지 부담을 AI 기반 네트워크 최적화로 해결하고 있습니다. RAN 지능형 제어기(RAN Intelligent Controller)를 통해 단순 자동화를 넘어 Intelligent Autonomous Network로 진화하고 있습니다.",
      image: "https://via.placeholder.com/600x400?text=Network+AI+Optimization",
      likes: 289,
      comments: 45,
      shares: 67
    }
  ];

  return (
    <div className="main-content">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <img src="https://via.placeholder.com/40" alt="profile" className="profile-pic" />
            <div className="post-info">
              <h3>{post.author}</h3>
              <p>{post.time}</p>
            </div>
          </div>
          <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} className="post-image" />
          </div>
          <div className="post-actions">
            <button>
              <i className="far fa-thumbs-up"></i>
              좋아요 {post.likes}
            </button>
            <button>
              <i className="far fa-comment"></i>
              댓글 {post.comments}
            </button>
            <button>
              <i className="far fa-share-square"></i>
              공유 {post.shares}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Trending Section Component
const TrendingSection = () => {
  const trends = [
    { id: 1, topic: "반도체 AI 혁신" },
    { id: 2, topic: "반도체 수율 개선" },
    { id: 3, topic: "AI 불량 검출" },
    { id: 4, topic: "Wafer Map 분석" },
    { id: 5, topic: "스마트 팩토리" }
  ];

  return (
    <div className="right-sidebar">
      <div className="trending-section">
        <h3>
          <i className="fas fa-fire"></i>
          트렌딩 토픽
        </h3>
        {trends.map(trend => (
          <div key={trend.id} className="trending-item">
            <span className="number">#{trend.id}</span>
            <span>{trend.topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// App Component
function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
        <TrendingSection />
      </div>
    </div>
  );
}

export default App;
