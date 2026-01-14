import { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Label } from '../components/ui/label';
import { ArrowLeft, Save, Plus, Trash2, Download, Upload } from 'lucide-react';
export default function AdminConsole() {
  const { content, updateContent } = useContent();
  const navigate = useNavigate();
  const [editedContent, setEditedContent] = useState(content);
  const handleSave = () => {
    updateContent(editedContent);
    alert('内容已保存！更改将立即生效。');
  };
  const handleExport = () => {
    const dataStr = JSON.stringify(editedContent, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'merit-content-backup.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target?.result as string);
          setEditedContent(imported);
          alert('导入成功！请点击保存按钮应用更改。');
        } catch (error) {
          alert('导入失败，请检查文件格式。');
        }
      };
      reader.readAsText(file);
    }
  };
  const updateNavItem = (id: string, field: string, value: string) => {
    setEditedContent({
      ...editedContent,
      navItems: editedContent.navItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };
  const addNavItem = () => {
    const newId = String(Date.now());
    setEditedContent({
      ...editedContent,
      navItems: [...editedContent.navItems, { id: newId, label: '新菜单', href: '/' }],
    });
  };
  const removeNavItem = (id: string) => {
    setEditedContent({
      ...editedContent,
      navItems: editedContent.navItems.filter(item => item.id !== id),
    });
  };
  const updateProduct = (sectionId: string, productId: string, field: string, value: string | string[]) => {
    setEditedContent({
      ...editedContent,
      sections: editedContent.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              products: section.products.map(product =>
                product.id === productId ? { ...product, [field]: value } : product
              ),
            }
          : section
      ),
    });
  };
  const updateSection = (sectionId: string, field: string, value: string) => {
    setEditedContent({
      ...editedContent,
      sections: editedContent.sections.map(section =>
        section.id === sectionId ? { ...section, [field]: value } : section
      ),
    });
  };
  const updateTeamMember = (id: string, field: string, value: string) => {
    setEditedContent({
      ...editedContent,
      team: editedContent.team.map(member =>
        member.id === id ? { ...member, [field]: value } : member
      ),
    });
  };
  const addTeamMember = () => {
    const newId = String(Date.now());
    setEditedContent({
      ...editedContent,
      team: [...editedContent.team, {
        id: newId,
        name: '新成员',
        position: '职位',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        bio: '个人简介...',
      }],
    });
  };
  const removeTeamMember = (id: string) => {
    setEditedContent({
      ...editedContent,
      team: editedContent.team.filter(member => member.id !== id),
    });
  };
  const updateSocialLink = (id: string, field: string, value: string) => {
    setEditedContent({
      ...editedContent,
      footer: {
        ...editedContent.footer,
        socialLinks: editedContent.footer.socialLinks.map(link =>
          link.id === id ? { ...link, [field]: value } : link
        ),
      },
    });
  };
  return (
    <div className="min-h-screen bg-[#0B0B1D] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回网站
            </Button>
            <h1 className="text-3xl font-bold text-white">内容管理控制台</h1>
          </div>
          <div className="flex gap-4">
            <label htmlFor="import-file">
              <Button asChild className="cursor-pointer">
                <span>
                  <Upload className="mr-2 h-4 w-4" />
                  导入配置
                </span>
              </Button>
            </label>
            <input
              id="import-file"
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <Button onClick={handleExport} variant="outline" className="cursor-pointer">
              <Download className="mr-2 h-4 w-4" />
              导出配置
            </Button>
            <Button onClick={handleSave} className="cursor-pointer bg-green-600 hover:bg-green-700">
              <Save className="mr-2 h-4 w-4" />
              保存所有更改
            </Button>
          </div>
        </div>
        <Tabs defaultValue="header" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="header" className="cursor-pointer">头部</TabsTrigger>
            <TabsTrigger value="hero" className="cursor-pointer">主标题</TabsTrigger>
            <TabsTrigger value="sections" className="cursor-pointer">产品</TabsTrigger>
            <TabsTrigger value="team" className="cursor-pointer">团队</TabsTrigger>
            <TabsTrigger value="contact" className="cursor-pointer">联系方式</TabsTrigger>
            <TabsTrigger value="footer" className="cursor-pointer">页脚</TabsTrigger>
          </TabsList>
          <TabsContent value="header">
            <Card>
              <CardHeader>
                <CardTitle>头部导航设置</CardTitle>
                <CardDescription>编辑网站导航菜单和Logo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Logo URL</Label>
                  <Input
                    value={editedContent.logo}
                    onChange={(e) => setEditedContent({ ...editedContent, logo: e.target.value })}
                    placeholder="Logo图片地址"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-semibold">导航菜单项</Label>
                    <Button onClick={addNavItem} size="sm" className="cursor-pointer">
                      <Plus className="mr-2 h-4 w-4" />
                      添加菜单
                    </Button>
                  </div>
                  {editedContent.navItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="pt-6 space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-1 space-y-2">
                            <Label>菜单文本</Label>
                            <Input
                              value={item.label}
                              onChange={(e) => updateNavItem(item.id, 'label', e.target.value)}
                            />
                          </div>
                          <div className="flex-1 space-y-2">
                            <Label>链接地址</Label>
                            <Input
                              value={item.href}
                              onChange={(e) => updateNavItem(item.id, 'href', e.target.value)}
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => removeNavItem(item.id)}
                            className="mt-8 cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>主标题区域</CardTitle>
                <CardDescription>编辑首页主标题和副标题</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>主标题</Label>
                  <Input
                    value={editedContent.hero.title}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        hero: { ...editedContent.hero, title: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>副标题</Label>
                  <Textarea
                    value={editedContent.hero.subtitle}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        hero: { ...editedContent.hero, subtitle: e.target.value },
                      })
                    }
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sections">
            <div className="space-y-6">
              {editedContent.sections.map((section) => (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>编辑{section.id}区域的内容</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>区域标题</Label>
                        <Input
                          value={section.title}
                          onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>区域描述</Label>
                        <Input
                          value={section.description}
                          onChange={(e) => updateSection(section.id, 'description', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">产品列表</Label>
                      {section.products.map((product) => (
                        <Card key={product.id}>
                          <CardContent className="pt-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>产品名称</Label>
                                <Input
                                  value={product.title}
                                  onChange={(e) =>
                                    updateProduct(section.id, product.id, 'title', e.target.value)
                                  }
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>产品类型</Label>
                                <Input
                                  value={product.subtitle}
                                  onChange={(e) =>
                                    updateProduct(section.id, product.id, 'subtitle', e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>产品描述</Label>
                              <Textarea
                                value={product.description || ''}
                                onChange={(e) =>
                                  updateProduct(section.id, product.id, 'description', e.target.value)
                                }
                                rows={2}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>图片URL</Label>
                              <Input
                                value={product.image}
                                onChange={(e) =>
                                  updateProduct(section.id, product.id, 'image', e.target.value)
                                }
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="team">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>团队成员</CardTitle>
                    <CardDescription>管理团队成员信息</CardDescription>
                  </div>
                  <Button onClick={addTeamMember} className="cursor-pointer">
                    <Plus className="mr-2 h-4 w-4" />
                    添加成员
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {editedContent.team.map((member) => (
                  <Card key={member.id}>
                    <CardContent className="pt-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>姓名</Label>
                          <Input
                            value={member.name}
                            onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>职位</Label>
                          <Input
                            value={member.position}
                            onChange={(e) => updateTeamMember(member.id, 'position', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>头像URL</Label>
                        <Input
                          value={member.image}
                          onChange={(e) => updateTeamMember(member.id, 'image', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>个人简介</Label>
                        <Textarea
                          value={member.bio}
                          onChange={(e) => updateTeamMember(member.id, 'bio', e.target.value)}
                          rows={3}
                        />
                      </div>
                      <Button
                        variant="destructive"
                        onClick={() => removeTeamMember(member.id)}
                        className="cursor-pointer"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        删除成员
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>联系方式</CardTitle>
                <CardDescription>编辑公司联系信息</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>电子邮件</Label>
                  <Input
                    value={editedContent.contact.email}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        contact: { ...editedContent.contact, email: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>电话</Label>
                  <Input
                    value={editedContent.contact.phone}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        contact: { ...editedContent.contact, phone: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>地址</Label>
                  <Input
                    value={editedContent.contact.address}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        contact: { ...editedContent.contact, address: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>营业时间</Label>
                  <Input
                    value={editedContent.contact.hours}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        contact: { ...editedContent.contact, hours: e.target.value },
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="footer">
            <Card>
              <CardHeader>
                <CardTitle>页脚设置</CardTitle>
                <CardDescription>编辑页脚信息和社交媒体链接</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>版权信息</Label>
                    <Input
                      value={editedContent.footer.copyright}
                      onChange={(e) =>
                        setEditedContent({
                          ...editedContent,
                          footer: { ...editedContent.footer, copyright: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>免责声明文本</Label>
                    <Input
                      value={editedContent.footer.disclaimer}
                      onChange={(e) =>
                        setEditedContent({
                          ...editedContent,
                          footer: { ...editedContent.footer, disclaimer: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">社交媒体链接</Label>
                  {editedContent.footer.socialLinks.map((link) => (
                    <Card key={link.id}>
                      <CardContent className="pt-6 space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>平台名称</Label>
                            <Input
                              value={link.name}
                              onChange={(e) => updateSocialLink(link.id, 'name', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>图标URL</Label>
                            <Input
                              value={link.icon}
                              onChange={(e) => updateSocialLink(link.id, 'icon', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>链接地址</Label>
                            <Input
                              value={link.url}
                              onChange={(e) => updateSocialLink(link.id, 'url', e.target.value)}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}