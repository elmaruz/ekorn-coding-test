<script lang="ts">
  import * as types from '../types';

  interface Props {
    student: types.Student;
  }

  let { student }: Props = $props();
</script>

<div class="student-card">
  <div class="student-name">{student.name.toUpperCase()}</div>

  <div class="student-info">
    <div class="info-row">
      <span class="student-info-key">Age:</span>
      <span class="student-info-value">{student.age}</span>
    </div>
    <div class="info-row">
      <span class="student-info-key">Average Score:</span>
      <span class="student-info-value">{student.averageScore}</span>
    </div>
    <div class="info-row">
      <span class="student-info-key">Active:</span>
      <span class="student-info-value">{student.activeLabel}</span>
    </div>
    <div class="info-row">
      <span class="student-info-key">Passed:</span>
      <span class="student-info-value"
        >{student.averageScore >= 60 ? 'Yes' : 'No'}</span
      >
    </div>
    <div class="info-row">
      <span class="student-info-key">ID:</span>
      <span class="student-info-value">{student.id}</span>
    </div>
  </div>
</div>

<style>
  .student-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .student-name {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 12px;
    color: #4a3728;
  }

  .student-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
  }

  .student-info-key {
    color: gray;
  }

  .student-info-value {
    font-weight: bold;
  }
</style>
