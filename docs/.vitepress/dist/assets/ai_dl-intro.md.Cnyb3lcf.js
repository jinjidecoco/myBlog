import{_ as a,c as r,o,a4 as e}from"./chunks/framework.BHBXlUku.js";const _=JSON.parse('{"title":"深度学习入门","description":"","frontmatter":{},"headers":[],"relativePath":"ai/dl-intro.md","filePath":"ai/dl-intro.md","lastUpdated":1744343656000}'),t={name:"ai/dl-intro.md"},n=e('<h1 id="深度学习入门" tabindex="-1">深度学习入门 <a class="header-anchor" href="#深度学习入门" aria-label="Permalink to &quot;深度学习入门&quot;">​</a></h1><h2 id="什么是深度学习" tabindex="-1">什么是深度学习？ <a class="header-anchor" href="#什么是深度学习" aria-label="Permalink to &quot;什么是深度学习？&quot;">​</a></h2><p>深度学习（Deep Learning, DL）是机器学习的一个子领域，它使用具有多层结构的人工神经网络（Artificial Neural Networks, ANNs）来学习数据的复杂表示。</p><h2 id="核心概念-人工神经网络" tabindex="-1">核心概念：人工神经网络 <a class="header-anchor" href="#核心概念-人工神经网络" aria-label="Permalink to &quot;核心概念：人工神经网络&quot;">​</a></h2><h3 id="神经元-neuron" tabindex="-1">神经元 (Neuron) <a class="header-anchor" href="#神经元-neuron" aria-label="Permalink to &quot;神经元 (Neuron)&quot;">​</a></h3><ul><li><strong>结构</strong>：接收输入，进行加权求和，通过激活函数处理，然后产生输出。</li><li><strong>激活函数</strong>：引入非线性，使网络能够学习复杂模式。常用激活函数包括 ReLU, Sigmoid, Tanh。</li></ul><h3 id="网络层-layer" tabindex="-1">网络层 (Layer) <a class="header-anchor" href="#网络层-layer" aria-label="Permalink to &quot;网络层 (Layer)&quot;">​</a></h3><ul><li><strong>输入层 (Input Layer)</strong>：接收原始数据。</li><li><strong>隐藏层 (Hidden Layer)</strong>：进行特征提取和转换。深度学习通常包含多个隐藏层。</li><li><strong>输出层 (Output Layer)</strong>：产生最终的预测或分类结果。</li></ul><h3 id="前向传播-forward-propagation" tabindex="-1">前向传播 (Forward Propagation) <a class="header-anchor" href="#前向传播-forward-propagation" aria-label="Permalink to &quot;前向传播 (Forward Propagation)&quot;">​</a></h3><p>数据从输入层流向输出层的过程，计算网络的预测结果。</p><h3 id="反向传播-backward-propagation" tabindex="-1">反向传播 (Backward Propagation) <a class="header-anchor" href="#反向传播-backward-propagation" aria-label="Permalink to &quot;反向传播 (Backward Propagation)&quot;">​</a></h3><p>计算预测结果与真实标签之间的误差，并将误差信息反向传播回网络，用于更新网络权重（通过梯度下降等优化算法）。</p><h2 id="常见的深度学习模型" tabindex="-1">常见的深度学习模型 <a class="header-anchor" href="#常见的深度学习模型" aria-label="Permalink to &quot;常见的深度学习模型&quot;">​</a></h2><h3 id="_1-卷积神经网络-convolutional-neural-networks-cnn" tabindex="-1">1. 卷积神经网络 (Convolutional Neural Networks, CNN) <a class="header-anchor" href="#_1-卷积神经网络-convolutional-neural-networks-cnn" aria-label="Permalink to &quot;1. 卷积神经网络 (Convolutional Neural Networks, CNN)&quot;">​</a></h3><ul><li><strong>特点</strong>：特别擅长处理网格状数据，如图像。通过卷积层提取空间层级特征。</li><li><strong>应用</strong>：图像识别、目标检测、图像生成。</li></ul><h3 id="_2-循环神经网络-recurrent-neural-networks-rnn" tabindex="-1">2. 循环神经网络 (Recurrent Neural Networks, RNN) <a class="header-anchor" href="#_2-循环神经网络-recurrent-neural-networks-rnn" aria-label="Permalink to &quot;2. 循环神经网络 (Recurrent Neural Networks, RNN)&quot;">​</a></h3><ul><li><strong>特点</strong>：能够处理序列数据，具有&quot;记忆&quot;能力，可以捕捉时间依赖关系。</li><li><strong>变种</strong>：长短期记忆网络 (LSTM)、门控循环单元 (GRU)，用于解决 RNN 的梯度消失/爆炸问题。</li><li><strong>应用</strong>：自然语言处理（文本生成、机器翻译）、语音识别、时间序列预测。</li></ul><h3 id="_3-transformer" tabindex="-1">3. Transformer <a class="header-anchor" href="#_3-transformer" aria-label="Permalink to &quot;3. Transformer&quot;">​</a></h3><ul><li><strong>特点</strong>：基于自注意力机制（Self-Attention），能够并行处理序列数据，在 NLP 领域取得了巨大成功。</li><li><strong>应用</strong>：BERT, GPT 系列模型。</li></ul><h2 id="常用框架" tabindex="-1">常用框架 <a class="header-anchor" href="#常用框架" aria-label="Permalink to &quot;常用框架&quot;">​</a></h2><ul><li><strong>TensorFlow</strong>: 功能全面，生态系统完善，适合生产部署。</li><li><strong>PyTorch</strong>: 灵活性高，易于调试，在研究领域非常流行。</li><li><strong>Keras</strong>: 高层 API，可以运行在 TensorFlow, Theano, CNTK 之上，易于快速原型设计。</li></ul><p>更多内容持续更新中...</p>',22),l=[n];function i(s,h,u,d,c,g){return o(),r("div",null,l)}const N=a(t,[["render",i]]);export{_ as __pageData,N as default};
