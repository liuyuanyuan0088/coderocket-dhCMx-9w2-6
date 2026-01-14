import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
interface NavItem {
  id: string;
  label: string;
  href: string;
}
interface Product {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  link: string;
  description?: string;
  features?: string[];
  performance?: {
    returns: string;
    risk: string;
    minimumInvestment: string;
  };
}
interface Section {
  id: string;
  title: string;
  description: string;
  products: Product[];
}
interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}
interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}
interface ContentData {
  logo: string;
  navItems: NavItem[];
  hero: {
    title: string;
    subtitle: string;
  };
  sections: Section[];
  team: TeamMember[];
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
    privacy: string;
    socialLinks: SocialLink[];
  };
}
const defaultContent: ContentData = {
  logo: 'https://static.wixstatic.com/media/0a3f48_fc30e21f59644ad48fb355d387e1db0c~mv2.png/v1/fill/w_258,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Original%20on%20Transparent.png',
  navItems: [
    { id: '1', label: '主页', href: '/' },
    { id: '2', label: '投资', href: '/investment' },
    { id: '3', label: '团队', href: '/team' },
    { id: '4', label: '联系我们', href: '/contact' },
  ],
  hero: {
    title: '投资组合及基金',
    subtitle: '凭借专业经验，利用不断变化的宏观环境捕捉大机遇，为投资者创造最优的基金组合，提供超预期的投资业绩。',
  },
  sections: [
    {
      id: 'pyramid',
      title: '终极工具：资产配置金字塔',
      description: '在任何市场情况下，均保持稳定。择机配置低，中，高波动性策略。',
      products: [
        {
          id: 'asset-allocation',
          title: '资产配置组合',
          subtitle: '(平衡型)',
          type: 'pyramid',
          image: 'https://static.wixstatic.com/media/nsplsh_64784243504c446d747541~mv2_d_5601_3734_s_4_2.jpg/v1/fill/w_1760,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_64784243504c446d747541~mv2_d_5601_3734_s_4_2.jpg',
          link: '/product/asset-allocation',
          description: '通过科学的资产配置，在不同市场环境下保持稳健收益。采用动态再平衡策略，确保风险可控。',
          features: ['动态资产配置', '风险对冲策略', '全球分散投资', '专业管理团队'],
          performance: {
            returns: '年化8-12%',
            risk: '中等',
            minimumInvestment: '100万元',
          },
        },
      ],
    },
    {
      id: 'low-volatility',
      title: '低波动性：更高收益率的现金等价物',
      description: '流动性为王：最大化现金回报，保障资金安全、避免恶性通胀。',
      products: [
        {
          id: 'deposits',
          title: '存款及货币基金',
          subtitle: '(流动型)',
          type: 'low',
          image: 'https://static.wixstatic.com/media/nsplsh_ba13b8ee16fd49fda4cad617c3ae1ca2~mv2.jpg/v1/fill/w_590,h_901,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_ba13b8ee16fd49fda4cad617c3ae1ca2~mv2.jpg',
          link: '/product/deposits',
          description: '高流动性的现金管理工具，提供比传统存款更高的收益率。',
          features: ['T+0赎回', '低风险', '稳定收益', '资金安全'],
          performance: {
            returns: '年化2-4%',
            risk: '极低',
            minimumInvestment: '1万元',
          },
        },
        {
          id: 'short-term',
          title: '短期固收基金',
          subtitle: '(流动型)',
          type: 'low',
          image: 'https://static.wixstatic.com/media/nsplsh_9eedea7c2df2413dace809789767a1a3~mv2.jpg/v1/fill/w_573,h_901,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_9eedea7c2df2413dace809789767a1a3~mv2.jpg',
          link: '/product/short-term',
          description: '投资于短期债券和货币市场工具，提供稳定的固定收益。',
          features: ['短期限', '固定收益', '流动性好', '风险可控'],
          performance: {
            returns: '年化3-5%',
            risk: '低',
            minimumInvestment: '10万元',
          },
        },
        {
          id: 'inflation',
          title: '通胀链接国债基金',
          subtitle: '(保障型)',
          type: 'low',
          image: 'https://static.wixstatic.com/media/nsplsh_445bf958e03f4de5ba131f5dd681b4ff~mv2.jpg/v1/fill/w_575,h_901,al_l,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_445bf958e03f4de5ba131f5dd681b4ff~mv2.jpg',
          link: '/product/inflation',
          description: '通过与通胀挂钩的国债投资，有效对抗通货膨胀风险。',
          features: ['通胀保护', '主权信用', '长期投资', '保值增值'],
          performance: {
            returns: '通胀+2-3%',
            risk: '低',
            minimumInvestment: '50万元',
          },
        },
      ],
    },
    {
      id: 'medium-volatility',
      title: '中波动性：风险和回报的平衡',
      description: '适度进攻、重视防守。',
      products: [
        {
          id: 'shark-fin',
          title: '鲨鱼鳍结构化产品',
          subtitle: '（均衡性）',
          type: 'medium',
          image: 'https://static.wixstatic.com/media/11062b_d79ebcc00ab54d8b818f11508eb0607b~mv2.jpg/v1/fill/w_591,h_995,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_d79ebcc00ab54d8b818f11508eb0607b~mv2.jpg',
          link: '/product/shark-fin',
          description: '创新的结构化产品，在保本的基础上追求更高收益。',
          features: ['保本增值', '灵活期限', '收益可观', '风险可控'],
          performance: {
            returns: '年化5-10%',
            risk: '中低',
            minimumInvestment: '50万元',
          },
        },
        {
          id: 'us-storage',
          title: '美国仓储地产基金',
          subtitle: '(机会型)',
          type: 'medium',
          image: 'https://static.wixstatic.com/media/nsplsh_4170573575656838356a59~mv2_d_2000_2500_s_2.jpg/v1/fill/w_573,h_995,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_4170573575656838356a59~mv2_d_2000_2500_s_2.jpg',
          link: '/product/us-storage',
          description: '投资于美国优质仓储地产项目，享受租金收益和资产增值。',
          features: ['稳定租金', '资产增值', '美元资产', '专业管理'],
          performance: {
            returns: '年化8-12%',
            risk: '中等',
            minimumInvestment: '100万元',
          },
        },
        {
          id: 'quant',
          title: '量化基金',
          subtitle: '（均衡型）',
          type: 'medium',
          image: 'https://static.wixstatic.com/media/nsplsh_3075587a6f457a595a3449~mv2_d_3888_2592_s_4_2.jpg/v1/fill/w_573,h_995,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_3075587a6f457a595a3449~mv2_d_3888_2592_s_4_2.jpg',
          link: '/product/quant',
          description: '运用先进的量化模型和算法交易，追求超额收益。',
          features: ['量化策略', '风险控制', '高频交易', '智能分析'],
          performance: {
            returns: '年化10-15%',
            risk: '中等',
            minimumInvestment: '100万元',
          },
        },
      ],
    },
    {
      id: 'high-volatility',
      title: '高波动性： 更多风险，更多回报',
      description: '未来是不确定的。主动投资于未来，用时间价值、将风险转化为回报。',
      products: [
        {
          id: 'tech-stocks',
          title: '全球科技股票基金',
          subtitle: '（颠覆创新型）',
          type: 'high',
          image: 'https://static.wixstatic.com/media/11062b_864c1ffc97034fc1a3c24f6f2a8d0a21~mv2.jpg/v1/fill/w_590,h_995,al_l,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_864c1ffc97034fc1a3c24f6f2a8d0a21~mv2.jpg',
          link: '/product/tech-stocks',
          description: '聚焦全球科技创新企业，把握科技发展带来的投资机遇。',
          features: ['科技龙头', '创新驱动', '全球布局', '长期价值'],
          performance: {
            returns: '年化15-25%',
            risk: '高',
            minimumInvestment: '50万元',
          },
        },
        {
          id: 'credit-bonds',
          title: '全球信用债基金',
          subtitle: '（机会型）',
          type: 'high',
          image: 'https://static.wixstatic.com/media/nsplsh_65785f7034416142786273~mv2_d_4001_2652_s_4_2.jpg/v1/fill/w_573,h_995,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_65785f7034416142786273~mv2_d_4001_2652_s_4_2.jpg',
          link: '/product/credit-bonds',
          description: '投资于全球高收益信用债，追求超额固定收益回报。',
          features: ['高收益', '信用分析', '分散风险', '专业管理'],
          performance: {
            returns: '年化12-18%',
            risk: '中高',
            minimumInvestment: '100万元',
          },
        },
        {
          id: 'private-equity',
          title: '私募股权基金',
          subtitle: '（颠覆创新型）',
          type: 'high',
          image: 'https://static.wixstatic.com/media/nsplsh_87b722fd22204ddb98700a91b660f169~mv2.jpg/v1/fill/w_575,h_995,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_87b722fd22204ddb98700a91b660f169~mv2.jpg',
          link: '/product/private-equity',
          description: '投资于高成长性的非上市企业，分享企业成长红利。',
          features: ['高成长性', '长期投资', '专业团队', '退出机制'],
          performance: {
            returns: '年化20-30%',
            risk: '高',
            minimumInvestment: '500万元',
          },
        },
      ],
    },
  ],
  team: [
    {
      id: '1',
      name: '张明',
      position: '首席执行官',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: '拥有20年金融行业经验，曾任职于多家国际知名投资机构。专注于资产配置和风险管理，为客户创造长期稳定收益。',
    },
    {
      id: '2',
      name: '李华',
      position: '首席投资官',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '金融工程博士，15年投资管理经验。擅长量化投资和风险控制，带领团队取得优异业绩。',
    },
    {
      id: '3',
      name: '王强',
      position: '首席风险官',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: '注册风险管理师，专注于金融风险管理和合规。确保公司运营符合监管要求，保护投资者利益。',
    },
    {
      id: '4',
      name: '陈敏',
      position: '投资总监',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
      bio: '特许金融分析师(CFA)，10年股票投资经验。深度研究全球科技行业，把握投资机遇。',
    },
  ],
  contact: {
    email: 'info@merit-asset.com',
    phone: '+852 1234 5678',
    address: '香港中环金融街1号，迈睿大厦25楼',
    hours: '周一至周五 9:00-18:00',
  },
  footer: {
    copyright: '© 迈睿资产管理有限公司',
    disclaimer: '免责声明 重要信息',
    privacy: '隐私政策',
    socialLinks: [
      {
        id: '1',
        name: 'LinkedIn',
        icon: 'https://static.wixstatic.com/media/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png',
        url: 'http://linkedin.com/company/merit-asset',
      },
      {
        id: '2',
        name: 'X',
        icon: 'https://static.wixstatic.com/media/11062b_bc7125385fcf422cad29fbe20a2b237c~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_bc7125385fcf422cad29fbe20a2b237c~mv2.png',
        url: 'https://twitter.com/Merit_Asset',
      },
      {
        id: '3',
        name: 'Facebook',
        icon: 'https://static.wixstatic.com/media/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png',
        url: 'https://www.facebook.com/profile.php?id=61552279312021',
      },
      {
        id: '4',
        name: 'YouTube',
        icon: 'https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png',
        url: 'https://www.youtube.com/@Merit_Asset',
      },
      {
        id: '5',
        name: 'Instagram',
        icon: 'https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png',
        url: 'https://instagram.com/meritassetmanagement',
      },
      {
        id: '6',
        name: 'TikTok',
        icon: 'https://static.wixstatic.com/media/11062b_69d309d6dbde492fae325fb0deca6556~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_69d309d6dbde492fae325fb0deca6556~mv2.png',
        url: 'https://www.tiktok.com/@merithongkong',
      },
    ],
  },
};
interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: ContentData) => void;
}
const ContentContext = createContext<ContentContextType | undefined>(undefined);
export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(() => {
    const saved = localStorage.getItem('merit-content');
    return saved ? JSON.parse(saved) : defaultContent;
  });
  useEffect(() => {
    localStorage.setItem('merit-content', JSON.stringify(content));
  }, [content]);
  const updateContent = (newContent: ContentData) => {
    setContent(newContent);
  };
  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}
export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}