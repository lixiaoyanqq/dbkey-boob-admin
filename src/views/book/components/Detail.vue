<template>
  <el-form ref="postForm" :model="postForm">
    <sticky :class-name="'sub-navbar'">
      <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
      <el-button
        v-loading="loading"
        type="success"
        @click="submitForm"
      >{{ isEdit ? '编辑电子书' : '新增电子书' }}</el-button>
    </sticky>
    <div class="detail-container">
      <el-row>
        <Warning />
        <el-col :span="24">
          <!-- 上传控件样式 -->
          <ebook-upload
            :file-list="fileList"
            :disabled="isEdit"
            @onSuccess="onUploadSuccess"
            @onRemove="onUploadRemove"
          />
        </el-col>
        <el-col :span="24">
          <el-col :span="24">
            <el-form-item prop="title">
              <MDinput v-model="postForm.title" :maxlength="100" name="name" required>书名</MDinput>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item label="作者:" :label-width="labelWidth">
                  <el-input v-model="postForm.author" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出版社:" :label-width="labelWidth">
                  <el-input v-model="postForm.publiser" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="语言:" :label-width="labelWidth">
                  <el-input v-model="postForm.language" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="根文件:" :label-width="labelWidth">
                  <el-input v-model="postForm.rootFile" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="文件路径:" :label-width="labelWidth">
                  <el-input v-model="postForm.filePath" placeholder="文件路径" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="解压路径:" :label-width="labelWidth">
                  <el-input v-model="postForm.unzipPath" placeholder="解压路径" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="封面路径:" :label-width="labelWidth">
                  <el-input v-model="postForm.coverPath" placeholder="封面路径" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="文件名称:" :label-width="labelWidth">
                  <el-input v-model="postForm.fileName" placeholder="文件名称" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="封面:" label-width="120px">
                  <a v-if="postForm.cover" :href="postForm.cover" target="_blank">
                    <img :src="postForm.cover" class="preview-img">
                  </a>
                  <span v-else>无</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="目录:" label-width="120px">
                  <div v-if="postForm.contents && postForm.contents.length" class="contents-wrapper">
                    <el-tree />
                  </div>
                  <span v-else>无</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>
<script>
import Sticky from '../../../components/Sticky'
import Warning from './Warning'
import EbookUpload from '../../../components/EbookUpload'
import MDinput from '../../../components/MDinput'
export default {
  components: {
    Sticky,
    Warning,
    EbookUpload,
    MDinput
  },
  props: {
    isEdit: Boolean
  },
  data() {
    return {
      loading: false,
      postForm: {
        status
      },
      fileList: [],
      labelWidth: '120px'
    }
  },
  methods: {
    onUploadSuccess() {
    },
    onUploadRemove() {
    },
    showGuide() {
    },
    submitForm() {
      this.loading = true
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-container {
  padding: 40px 50px 20px;
  .preview-img{
    width: 200px;
    height: 27px;
  }
}
</style>
