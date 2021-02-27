<template>
    <div class="articles">
        <banner></banner>
        <div class="site-content animate">
            <main class="site-main">
                <article class="hentry">
                    <!-- 文章头部 -->
                    <header class="entry-header">
                        <!-- 标题输出 -->
                        <h1 class="entry-title">澳门风云</h1>
                        <hr>
                        <div class="breadcrumbs">
                            <div id="crumbs">最后更新时间：2021年02月12日</div>
                        </div>
                    </header>
                    <!-- 正文输出 -->
                    <div class="entry-content">
                        <p>@[TOC]</p>
                        <h4 id="引言：">引言：</h4>
                        <p>2021年1月23号，从深圳抵达到珠海湾仔码头！！！</p>
                        <blockquote>
                            <img src="../assets/images/aomen8.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen1.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen2.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen3.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen4.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen5.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen6.jpg" alt="">
                        </blockquote>
                        <blockquote>
                            <img src="../assets/images/aomen7.jpg" alt="">
                        </blockquote>
                    </div>
                    <!-- 文章底部 -->
                    <section-title>
                        <footer class="post-footer">
                            <!-- 阅读次数 -->
                            <div class="post-like">
                                <i class="iconfont iconeyes"></i>
                                <span class="count">685</span>
                            </div>
                            <!-- 文章标签 -->
                            <div class="post-tags">
                                <i class="iconfont iconcategory"></i>Web
                            </div>
                        </footer>
                    </section-title>
                    <!--声明-->
                    <div class="open-message">
                        <p>声明：大林哥官网|版权所有，违者必究|如未注明，均为原创|本网站采用<a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">BY-NC-SA</a>协议进行授权</p>
                    </div>
                </article>
            </main>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/banner'
    import sectionTitle from '@/components/section-title'
    import menuTree from '@/components/menu-tree'
    import './css/articles.less'
    export default {
        name: 'articles',
        data(){
          return{
              showDonate: false,
              menus: []
          }
        },
        components: {
            Banner,
            sectionTitle,
            menuTree
        },
        methods: {
          fetchH(arr,left,right){
              if (right) {
                  return arr.filter(item => item.offsetTop > left && item.offsetTop < right)
              }else {
                  return arr.filter(item => item.offsetTop > left)
              }
          },
          // 生成目录
          createMenus(){
              let arr = []
              for(let i=6;i>0;i--){
                  let temp = []
                  let e = document.querySelector(".entry-content").querySelectorAll(`h${i}`)
                  for (let j=0;j<e.length;j++){
                      let child = this.fetchH(arr,e[j].offsetTop,(j+1 === e.length)?undefined:e[j+1].offsetTop)
                      temp.push({
                          h: i,
                          title: e[j].innerText,
                          id: e[j].id,
                          offsetTop: e[j].offsetTop,
                          child
                      })
                  }
                  if (temp.length){
                      arr = temp
                  }
              }
              this.menus = arr
          }
        },
        mounted(){
            this.createMenus()
        },
        created() {
            
        }
    }
</script>

